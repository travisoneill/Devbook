const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const CurrentUserStore = require('./current_user_store');

let _posts = [];
let _posters = {};
let _comments = {};
let _commenters = {};

// PostStore.clone = function(object){
//   let clone = {};
//   Object.keys(object).foreach( (key) => {
//     if(typeof key !== "object"){
//       clone.key = object.key;
//     } else {
//       clone.key = PostStore.clone(key);
//     }
//   });
// };

const PostStore = new Store(Dispatcher);

PostStore.all = function(){
  // let arr = Object.keys(_posts).map( key => _posts[key] );
  // arr.sort( (a, b) => a.created_at > b.created_at );
  // return arr
  return _posts.slice(0);
};

PostStore.comments = function(post){
  return _comments[post.id];
};

PostStore.getInfo = function(comment){
  return _commenters[comment.id];
};

PostStore.getPoster = function(post){
  return _posters[post.id];
};

PostStore.empty = function(){
  _posts = {};
  _posters = {};
  _comments = {};
  _commenters = {};
};

PostStore.add = function(post){
  // _posts[post.id] = post;
  let poster = CurrentUserStore.get();
  _posts.unshift(post);
  _posters[post.id] = {name: poster.full_name, url: poster.profile_pic_url};
  _comments[post.id] = [];
};

PostStore.addComment = function(comment, user){
  _comments[comment.post_id].push(comment);
  _commenters[comment.id] = {name: user.name, url: user.url};
};

PostStore.remove = function(post){
  // delete _posts[post.id];
  let update = [];
  for (let i = 0; i < _posts.length; i++) {
    if(_posts[i].id !== post.id){update.push(_posts[i])}
  }
  _posts = update;
};

PostStore.stock = function(payload){
  PostStore.empty();
  // posts.forEach( (post) => {
  //   _posts[post.id] = post;
  // });
  _posts = payload.posts;
  _posters = payload.posters;
  _comments = payload.comments;
  _commenters = payload.commenters;
};

PostStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_timeline:
      PostStore.stock(payload);
      this.__emitChange();
      break;
    case Constants.add_post:
      PostStore.add(payload.post);
      this.__emitChange();
      break;
    case Constants.add_comment:
      PostStore.addComment(payload.comment, payload.user)
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
