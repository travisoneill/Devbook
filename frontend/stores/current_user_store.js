const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _currentUser = undefined;

const CurrentUserStore = new Store(Dispatcher);

CurrentUserStore.get = function(){
  return _currentUser;
};

CurrentUserStore.__onDispatch = function(payload){
  console.log(payload);
  switch(payload.actionType){
    case Constants.store_current_user:
      _currentUser = payload.user;
      this.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
