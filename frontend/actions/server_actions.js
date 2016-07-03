const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');

module.exports = {

  storeCurrentUser(user){
    Dispatcher.dispatch({
      actionType: Constants.store_current_user,
      user: user
    });
  },

  storeSelectedUser(user){
    Dispatcher.dispatch({
      actionType: Constants.store_selected_user,
      user: user
    });
  },

  logout(){
    Dispatcher.dispatch({
      actionType: Constants.logout
    });
  },

  storeUrl(img){
    Dispatcher.dispatch({
      actionType: Constants.store_url,
      url: img.url
    });
  },

  resetUrl(){
    Dispatcher.dispatch({
      actionType: Constants.reset_url
    });
  },

  storePost(post){
    console.log(post);
    console.log("Now go make a post store!");
  }

};
