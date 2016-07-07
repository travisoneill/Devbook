const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

let _photos = [];

const SearchStore = new Store(Dispatcher);

SearchStore.all = function(){
  return _photos;
};

SearchStore.empty = function(){
  _photos = [];
};

SearchStore.add = function(photo){
  _photos.unshift(photo);
};

SearchStore.remove = function(photo){
  let update = [];
  for (let i = 0; i < _photos.length; i++) {
    if(_photos[i].id !== photo.id){ update.push(photo); }
  }
  _photos = update;
};


SearchStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.add_photo:
      SearchStore.add(payload.photo);
      this.__emitChange();
      break;
    case Constants.clear_search:
      SearchStore.empty();
      this.__emitChange();
      break;
  }
};


module.exports = SearchStore;
