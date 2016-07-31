const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _selectedUser = {};

const SelectedUserStore = new Store(Dispatcher);

SelectedUserStore.get = function(){
  return _selectedUser;
};

SelectedUserStore.securityCheck = function(){
  if(_selectedUser.session_token || _selectedUser.password_digest){
    console.log('SECURITY ISSUE');
  }
}

SelectedUserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_selected_user:
      _selectedUser = payload.user;
      SelectedUserStore.securityCheck();
      localStorage.selected = _selectedUser;
      console.log(_selectedUser);
      this.__emitChange();
      break;
    // case Constants.store_current_user:
    //   _selectedUser = payload.user;
    //   this.__emitChange();
    //   break;
    case Constants.logout:
      _selectedUser = undefined;
      localStorage.selected = undefined;
      // this.__emitChange();
      break;
  }
};

module.exports = SelectedUserStore;
