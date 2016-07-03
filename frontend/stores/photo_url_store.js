const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _url = undefined;

const PhotoUrlStore = new Store(Dispatcher);

PhotoUrlStore.get = function(){
  return _url;
};

PhotoUrlStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_url:
      _url = payload.url;
      console.log(`stored: ${_url}`);
      this.__emitChange();
      break;
    case Constants.reset_url:
      _url = undefined;
      this.__emitChange();
      break;
  }
};

module.exports = PhotoUrlStore;
