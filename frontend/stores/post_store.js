const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _posts = {};

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

PostStore.empty = function(){
  _posts = {};
};

PostStore.add = function(post){
  _posts[post.id] = post;
};

PostStore.remove = function(post){
  delete _posts[post.id];
};

PostStore.stock = function(posts){
  PostStore.empty();
  posts.forEach( (post) => {
    _posts[post.id] = post;
  });
};

PostStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_timeline:
      PostStore.stock(payload.posts);
      this.__emitChange();
      break;
    case Constants.add_post:
      PostStore.add(payload.post);
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
