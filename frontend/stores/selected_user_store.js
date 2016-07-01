const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _selectedUser = undefined;

const SelectedUserStore = new Store(Dispatcher);

SelectedUserStore.get = function(){
  return _selectedUser;
};

SelectedUserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_selected_user:
      _selectedUser = payload.user;
      this.__emitChange();
      break;
    case Constants.store_current_user:
      _selectedUser = payload.user;
      this.__emitChange();
      break;
    case Constants.logout:
      _selectedUser = undefined;
      this.__emitChange();
      break;
  }
};

module.exports = SelectedUserStore;
