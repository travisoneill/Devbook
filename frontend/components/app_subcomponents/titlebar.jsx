const React = require('react');
const ClientActions = require('../../actions/client_actions');
const SearchBar = require('./search_bar');
const hashHistory = require('react-router').hashHistory;
const Transform = require('../../constants/transformations');
const Defaults = require('../../constants/defaults');

const AppTitlebar = React.createClass({

  logout(e){
    e.preventDefault();
    ClientActions.logout();
    // hashHistory.replace('/');
  },

  render(){
    const url = Transform.titlebarLogo(Defaults.logo_pic_white_blue);

    return(
      <div className="app-titlebar">
        <div className="titlebar-logo-container" >
          <img src={url} className="titlebar-logo" />
        </div>
        <SearchBar />
        <button className="logout-button" onClick={this.logout}>Logout</button>
      </div>
    );
  }
});

module.exports = AppTitlebar;
