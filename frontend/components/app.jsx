const React = require('react');
const ClientActions = require('../actions/client_actions');
const App = React.createClass({

  logout(e){
    e.preventDefault();
    ClientActions.logout();
  },

  render(){
    return (
      <div>
        <h3>Welcome to the App</h3>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
});

module.exports = App;
