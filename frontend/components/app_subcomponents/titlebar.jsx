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
    const url = Defaults.app_logo;
    const user = CurrentUserStore.get()
    const name = user.full_name;
    const thumbnail = Transform.profilePic3(user.profile_pic_url);
    return(
      <div className="app-titlebar">
        <div className="titlebar-logo-container">
          <Link to={`timeline/${user.id}`}>
            <img className='app-logo' src={url} className="titlebar-logo"/>
          </Link>
        </div>
        <SearchBar />
        <div className='titlebar-name-container'>
          <div className="titlebar-thumbnail-container">
            <Link to={`timeline/${user.id}`}>
              <img className='titlebar-thumbnail' src={thumbnail} />
            </Link>
          </div>
          <Link to={`timeline/${user.id}`}>
            <p className='titlebar-name'>{name}</p>
          </Link>
        </div>
        <div className='titlebar-button-container'>
          <Link to={`timeline/${user.id}`}>
            <button className="titlebar-link">Home</button>
          </Link>
          <button className="logout-button" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
});

module.exports = AppTitlebar;
