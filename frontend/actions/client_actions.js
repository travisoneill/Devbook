const ApiCalls = require('../util/api_calls');
const ServerActions = require('./server_actions');
const CurrentUserStore = require('../stores/current_user_store');
const SelectedUserStore = require('../stores/selected_user_store');


module.exports = {

  createUser(data){
    ApiCalls.createUser(data, ServerActions.login);
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
    user.profile_pic_url = image.secure_url;
    const user_params = {id: user.id, params: { profile_pic_url: user.profile_pic_url }};
    ApiCalls.updateUser(user_params, ServerActions.storeCurrentUser);
  },

  postCoverPhoto(image){
    let user = CurrentUserStore.get();
    user.cover_pic_url = image.secure_url;
    const user_params = {id: user.id, params: { cover_pic_url: user.cover_pic_url }};
    ApiCalls.updateUser(user_params, ServerActions.storeCurrentUser);
  },

  postImage(image){
    let id = CurrentUserStore.get().id;
    const url = image.secure_url;
    const photo = {photo: {user_id: id, url: url} };
    ApiCalls.addPhoto(photo, ServerActions.storePhoto);
  },

  getAllPhotos(user){
    ApiCalls.getAllPhotos(user, ServerActions.storeAllPhotos);
  },

  getAllFriends(user){
    ApiCalls.getAllFriends(user, ServerActions.storeAllFriends);
  },

  mutualFriends(user1, user2){
    ApiCalls.getMutualFriends(user1, user2, ServerActions.storeAllFriends);
  },

  getAllIncoming(user){
    ApiCalls.getAllIncoming(user, ServerActions.storeAllIncoming);
  },

  createPost(post){
    ApiCalls.createPost(post, ServerActions.storePost);
  },

  getTimeline(id, selector){
    let tlType = selector ? "own" : "other"
    ApiCalls.getTimeline(id, tlType, ServerActions.storeTimeline);
  },

  userSearch(str){
    ApiCalls.userSearch(str, ServerActions.storeSearchResults);
  },

  clearSearch(){
    ServerActions.clearSearch();
  },

  addComment(comment){
    ApiCalls.addComment(comment, ServerActions.storeComment)
  },

  getRelations(user){
    ApiCalls.getRelations(user, ServerActions.setRelation);
  }

};
