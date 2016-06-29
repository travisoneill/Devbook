const ApiCalls = require('../util/api_calls');
const ServerActions = require('./server_actions');

module.exports = {

  createUser(data){
    ApiCalls.createUser(data, ServerActions.storeCurrentUser);
  }

};
