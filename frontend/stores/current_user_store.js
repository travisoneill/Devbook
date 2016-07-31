const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _currentUser = undefined;
let _relation = {};

const CurrentUserStore = new Store(Dispatcher);

CurrentUserStore.get = function(){
  return _currentUser;
};

CurrentUserStore.relation = function(id){
  if(_relation[id]){return _relation[id];}
  else { return "none"; }
};

CurrentUserStore.store = function(payload){
  _currentUser = payload.user;
};

CurrentUserStore.setRelation = function(relation){
  _relation = relation;
};

CurrentUserStore.securityCheck = function(){
  if(_currentUser.session_token || _currentUser.password_digest){
    console.log('SECURITY ISSUE');
  }
}

CurrentUserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_current_user:
      CurrentUserStore.store(payload);
      CurrentUserStore.securityCheck();
      this.__emitChange();
      break;
    case Constants.set_relation:
      CurrentUserStore.setRelation(payload.relation);
      CurrentUserStore.securityCheck();
      console.log(_relation);
      break;
    case Constants.logout:
      _currentUser = undefined;
      _relation = undefined;
      // this.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
