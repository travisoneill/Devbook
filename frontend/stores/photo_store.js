const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

let _photos = [];

const PhotoStore = new Store(Dispatcher);

PhotoStore.all = function(){
  return _photos;
};

PhotoStore.empty = function(){
  _photos = [];
};

PhotoStore.add = function(photo){
  _photos.unshift(photo);
};

PhotoStore.addAll = function(photos){
  _photos = photos;
};

PhotoStore.remove = function(photo){
  let update = [];
  for (let i = 0; i < _photos.length; i++) {
    if(_photos[i].id !== photo.id){ update.push(photo); }
  }
  _photos = update;
};


PhotoStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.add_photo:
      PhotoStore.add(payload.photo);
      this.__emitChange();
      break;
    case Constants.store_photos:
      PhotoStore.addAll(payload.photos);
      this.__emitChange();
      break;
  }
};


module.exports = PhotoStore;
