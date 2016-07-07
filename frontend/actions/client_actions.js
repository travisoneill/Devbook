const ApiCalls = require('../util/api_calls');
const ServerActions = require('./server_actions');
const CurrentUserStore = require('../stores/current_user_store');
const SelectedUserStore = require('../stores/selected_user_store');


module.exports = {

  createUser(data){
    ApiCalls.createUser(data, ServerActions.storeCurrentUser);
  },

  login(data){
    ApiCalls.login(data, ServerActions.login);
  },

  logout(){
    ApiCalls.logout(ServerActions.logout);
  },

  selectUser(id){
    ApiCalls.getUser(id, ServerActions.storeSelectedUser);
  },

  deleteUser(id){
    ApiCalls.deleteUser(ServerActions.logout);
  },

  editUser(data){
    ApiCalls.updateUser(ServerActions.storeCurrentUser);
  },

  postProfilePic(image){
    let user = CurrentUserStore.get();
    user.profile_pic_url = image.url;
    ApiCalls.updateUser(user, ServerActions.storeCurrentUser);
  },

  postCoverPhoto(image){
    let user = CurrentUserStore.get();
    user.cover_pic_url = image.url;
    ApiCalls.updateUser(user, ServerActions.storeCurrentUser);
  },

  postImage(image){
    let id = CurrentUserStore.get().id;
    const url = image.url;
    const photo = {photo: {user_id: id, url: url} };
    ApiCalls.addPhoto(photo, ServerActions.storePhoto);
  },

  getAllPhotos(user){
    ApiCalls.getAllPhotos(user, ServerActions.storeAllPhotos);
  },


  createPost(post){
    ApiCalls.createPost(post, ServerActions.storePost);
  },

  getTimeline(id){
    ApiCalls.getTimeline(id, ServerActions.storeTimeline);
  },

  userSearch(str){
    // debugger;
    ApiCalls.userSearch(str, ServerActions.storeSearchResults);
  },

  clearSearch(){
    ServerActions.clearSearch();
  },

  // buttonState(current, selected){
  //   ApiCalls.buttonState(current, selected, )
  // }


};
