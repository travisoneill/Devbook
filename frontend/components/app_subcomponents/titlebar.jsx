const React = require('react');
const ClientActions = require('../../actions/client_actions');

const AppTitlebar = React.createClass({


  logout(e){
    e.preventDefault();
    ClientActions.logout();
  },

  render(){
    return(
      <div className="app-titlebar">
        <h4 className="titlebar-logo">App-Titlebar</h4>
        <button className="logout-button" onClick={this.logout}>Logout</button>
      </div>
    );
  }
});

module.exports = AppTitlebar;
