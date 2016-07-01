const ApiCalls = require('../util/api_calls');
const ServerActions = require('./server_actions');

module.exports = {

  createUser(data){
    ApiCalls.createUser(data, ServerActions.storeCurrentUser);
  },

  login(data){
    ApiCalls.login(data, ServerActions.storeCurrentUser);
  },

  logout(){
    ApiCalls.logout(ServerActions.logout);
  },

  selectUser(id){
    ApiCalls.getUser(ServerActions.storeSelectedUser);
  },

  deleteUser(id){
    ApiCalls.deleteUser(ServerActions.logout);
  },

  editUser(data){
    ApiCalls.updateUser(ServerActions.storeCurrentUser);
  }

};
