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
    Dispatcher.dispatch({
      actionType: Constants.add_post,
      post: post
    });
  },

  storeTimeline(posts){
    Dispatcher.dispatch({
      actionType: Constants.store_timeline,
      posts: posts
    });
  },

  storeSearchResults(results){
    // debugger;
    Dispatcher.dispatch({
      actionType: Constants.store_matches,
      results: results
    });
  }

};
