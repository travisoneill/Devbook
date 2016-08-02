const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

let _matches = [];

const SearchStore = new Store(Dispatcher);

SearchStore.all = function(){
  return _matches;
};

SearchStore.empty = function(){
  _matches = [];
};

SearchStore.stock = function(matches){
  _matches = matches;
};

SearchStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.store_matches:
      SearchStore.stock(payload.results);
      this.__emitChange();
      break;
    case Constants.clear_search:
      SearchStore.empty();
      this.__emitChange();
      break;
  }
};


module.exports = SearchStore;
