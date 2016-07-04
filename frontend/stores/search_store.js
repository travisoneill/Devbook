const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');


let _matches = [];

const SearchStore = new Store(Dispatcher);

SearchStore.all = function(){
  return _matches.slice(0);
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
      SearchStore.stock(payload.matches);
      console.log(_matches);
      this.__emitChange();
      break;
  }
};


module.exports = SearchStore;
