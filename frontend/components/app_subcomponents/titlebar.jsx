const React = require('react');
const ClientActions = require('../../actions/client_actions');
const SearchBar = require('./search_bar');
const hashHistory = require('react-router').hashHistory;

const AppTitlebar = React.createClass({

  logout(e){
    e.preventDefault();
    ClientActions.logout();
    // hashHistory.replace('/');
  },

  render(){
    return(
      <div className="app-titlebar">
        <h4 className="titlebar-logo">App-Titlebar</h4>
        <SearchBar />
        <button className="logout-button" onClick={this.logout}>Logout</button>
      </div>
    );
  }
});

module.exports = AppTitlebar;
