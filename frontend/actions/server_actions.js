const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');
const hashHistory = require('react-router').hashHistory;

const ServerActions = {

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
    hashHistory.push('/splash');
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
  },

  clearSearch(){
    Dispatcher.dispatch({
      actionType: Constants.clear_search,
    });
  },

  login(resp){
    ServerActions.storeCurrentUser(resp);
    ServerActions.storeSelectedUser(resp);
    hashHistory.push('/');
  },

  storePhoto(photo){
    Dispatcher.dispatch({
      actionType: Constants.add_photo,
      photo: photo
    });
  },

  storeAllPhotos(photos){

  }

};

module.exports = ServerActions;
