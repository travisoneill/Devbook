const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

let _friends = [];
let _incoming = [];

const FriendStore = new Store(Dispatcher);

FriendStore.all = function(){
  return _friends;
};

FriendStore.incoming = function(){
  return _incoming;
};

FriendStore.empty = function(){
  _friends = [];
};

FriendStore.add = function(friend){
  _friends.unshift(friend);
};

FriendStore.addIncoming = function(friend){
  _incoming.unshift(friend);
};

FriendStore.storeIncoming = function(incoming){
  _incoming = incoming;
};

FriendStore.addAll = function(friends){
  _friends = friends;
};

FriendStore.remove = function(friend){
  let update = [];
  for (let i = 0; i < _friends.length; i++) {
    if(_friends[i].id !== friend.id){ update.push(_friends[i]); }
  }
  _friends = update;
};

FriendStore.removeIncoming = function(incoming){
  let update = [];
  for (let i = 0; i < _incoming.length; i++) {
    if(_incoming[i].id !== incoming.id){ update.push(_incoming[i]); }
  }
  _incoming = update;
};


FriendStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_incoming:
      FriendStore.storeIncoming(payload.incoming);
      this.__emitChange();
      break;
    case Constants.store_friends:
      FriendStore.addAll(payload.friends);
      this.__emitChange();
      break;
    case Constants.remove_friend:
      FriendStore.remove(payload.friend);
      this.__emitChange();
      break;
    case Constants.accept_request:
      FriendStore.removeIncoming(payload.friend);
      FriendStore.add(payload.friend);
      this.__emitChange();
      break;
      // case Constants.add_friend:
      //   FriendStore.add(payload.friend);
      //   this.__emitChange();
      //   break;
      // case Constants.add_incoming:
      //   FriendStore.addIncoming(payload.incoming);
      //   this.__emitChange();
      //   break;
    // case Constants.remove_incoming:
    //   FriendStore.removeIncoming(payload.incoming);
    //   this.__emitChange();
    //   break;
  }
};


module.exports = FriendStore;
