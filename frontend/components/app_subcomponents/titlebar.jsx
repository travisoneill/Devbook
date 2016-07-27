const React = require('react');
const ClientActions = require('../../actions/client_actions');
const SearchBar = require('./search_bar');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const Transform = require('../../constants/transformations');
const Defaults = require('../../constants/defaults');
const CurrentUserStore = require('../../stores/current_user_store');

const AppTitlebar = React.createClass({

  logout(e){
    e.preventDefault();
    ClientActions.logout();
    // hashHistory.replace('/');
  },

  render(){
    const url = Transform.titlebarLogo(Defaults.logo_pic_white_blue);
    const user = CurrentUserStore.get()
    const name = user.full_name;
    const thumbnail = Transform.profilePic3(user.profile_pic_url);
    return(
      <div className="app-titlebar">
        <div className="titlebar-logo-container" >
          <img src={url} className="titlebar-logo" />
        </div>
        <SearchBar />
        <div className="titlebar-thumbnail-container">
          <img className='titlebar-thumbnail' src={thumbnail} />
        </div>
        <p className='titlebar-name'>{name}</p>
        <Link to={`timeline/${user.id}`}>
          <p className="titlebar-link">Home</p>
        </Link>
        <button className="logout-button" onClick={this.logout}>Logout</button>
      </div>
    );
  }
});

module.exports = AppTitlebar;
