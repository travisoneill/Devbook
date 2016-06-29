const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');

module.exports = {

  storeCurrentUser(user){
    console.log("DONE");
    Dispatcher.dispatch({
      actionType: Constants.store_current_user,
      user: user
    });
  }

};
