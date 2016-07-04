const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _matches = [];

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

const SearchStore = new Store(Dispatcher);

SearchStore.all = function(){
  return _matches.slice(0);
};

SearchStore.empty = function(){
  _matches = [];
};

// SearchStore.add = function(post){
//   _posts[post.id] = post;
// };
//
// SearchStore.remove = function(post){
//   delete _posts[post.id];
// };

SearchStore.stock = function(matches){
  _matches = matches;
};

SearchStore.__onDispatch = function(payload){
  switch(payload.actionType){
    // case Constants.store_timeline:
    //   SearchStore.stock(payload.posts);
    //   this.__emitChange();
    //   break;
    // case Constants.add_post:
    //   SearchStore.add(payload.post);
    //   this.__emitChange();
    //   break;
  }
};

module.exports = SearchStore;
