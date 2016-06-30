const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');

module.exports = {

  storeCurrentUser(user){
    Dispatcher.dispatch({
      actionType: Constants.store_current_user,
      user: user
    });
  },

  logout(){
    Dispatcher.dispatch({
      actionType: Constants.logout
    });
  }


};
