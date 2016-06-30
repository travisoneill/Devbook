const React = require('react');
const ClientActions = require('../actions/client_actions');

const Demo = React.createClass({

  demoLogin(e){
    e.preventDefault();
    const data = { user: {email: "your thoughts", password: "let there be light"} };
    ClientActions.login(data);
  },

  render(){
    return(
      <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
    );
  }
});

module.exports = Demo;
