const React = require('react');
const ClientActions = require('../../actions/client_actions');
const CurrentUserStore = require('../../stores/current_user_store');
const SelectedUserStore = require('../../stores/selected_user_store');
const hashHistory = require('react-router').hashHistory;

const Demo = React.createClass({

  demoLogin(e){
    e.preventDefault();
    const data = { user: {email: "your thoughts", password: "let there be light"} };
    ClientActions.login(data);
  },

  render(){
    return(
      <div className="round-button">
       <div className="round-button-circle" onClick={this.demoLogin}>
         <p className="round-button">Demo Login</p>
       </div>
     </div>
    );
  }
});

module.exports = Demo;
