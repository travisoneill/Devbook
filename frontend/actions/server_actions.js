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

  reload(resp){
    ServerActions.storeCurrentUser(resp);
    // let id = +window.location.hash.match(/\/\d*\?/).pop().slice(1,-1);
    // let selected = localStorage.selected;
    // debugger;
    ServerActions.storeSelectedUser(resp);
  },

  storePhoto(photo){
    Dispatcher.dispatch({
      actionType: Constants.add_photo,
      photo: photo
    });
  },


  storeAllPhotos(photos){
    Dispatcher.dispatch({
      actionType: Constants.store_photos,
      photos: photos
    });
  },

  removePhoto(photo){
    Dispatcher.dispatch({
      actionType: Constants.remove_photo,
      photo: photo
    });
  },

  storeAllFriends(friends){
    Dispatcher.dispatch({
      actionType: Constants.store_friends,
      friends: friends
    });
  },

  emptyFriends(){
    Dispatcher.dispatch({
      actionType: Constants.empty_friends
    });
  },

  storeAllIncoming(incoming){
    Dispatcher.dispatch({
      actionType: Constants.store_incoming,
      incoming: incoming
    });
  },

  removeFriend(friend){
    Dispatcher.dispatch({
      actionType: Constants.remove_friend,
      friend: friend
    });
  },

  addFriend(friend){
    Dispatcher.dispatch({
      actionType: Constants.add_friend,
      friend: friend
    });
  },

  removeRequest(incoming){
    Dispatcher.dispatch({
      actionType: Constants.remove_incoming,
      incoming: incoming
    });
  },

  acceptRequest(friend){
    Dispatcher.dispatch({
      actionType: Constants.accept_request,
      friend: friend
    });
  }


};

module.exports = ServerActions;
