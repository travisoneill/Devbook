const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

let _posts = {};
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
  return Object.keys(_posts).map( key => _posts[key] );
};

PostStore.comments = function(post){
  return _comments[post.id];
};

PostStore.getInfo = function(comment){
  return _commenters[comment.id];
};

PostStore.empty = function(){
  _posts = {};
  _comments = {};
  _commenters = {};
};

PostStore.add = function(post){
  _posts[post.id] = post;
  _comments[post.id] = [];
};

PostStore.addComment = function(comment, user){
  debugger;
  _comments[comment.post_id].push(comment);
  _commenters[comment.id] = {name: user.name, url: user.url};
};

PostStore.remove = function(post){
  delete _posts[post.id];
};

PostStore.stock = function(posts, comments, commenters){
  PostStore.empty();
  posts.forEach( (post) => {
    _posts[post.id] = post;
  });
  _comments = comments;
  _commenters = commenters;
};

PostStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_timeline:
      PostStore.stock(payload.posts, payload.comments, payload.commenters);
      this.__emitChange();
      break;
    case Constants.add_post:
      PostStore.add(payload.post);
      this.__emitChange();
      break;
    case Constants.add_comment:
      debugger;
      PostStore.addComment(payload.comment, payload.user)
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
