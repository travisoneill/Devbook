// const Dispatcher = require('../dispatcher/dispatcher');
// const Store = require('flux/utils').Store;
// const Constants = require('../constants/constants');
//
// let _incoming = [];
// let _outgoing = [];
//
// const SearchStore = new Store(Dispatcher);
//
// SearchStore.outgoing = function(){
//   return _outgoing;
// };
//
// SearchStore.inoming = function(){
//   return _incoming;
// };
//
// SearchStore.incomingIncludes = function(user){
//
// };
//
// SearchStore.outgoingIncludes = function(user){
//
// };
//
// SearchStore.__onDispatch = function(payload){
//   switch(payload.actionType){
//     case Constants.store_matches:
//       SearchStore.stock(payload.results);
//       this.__emitChange();
//       break;
//     case Constants.clear_search:
//       SearchStore.empty();
//       this.__emitChange();
//       break;
//   }
// };


module.exports = SearchStore;
