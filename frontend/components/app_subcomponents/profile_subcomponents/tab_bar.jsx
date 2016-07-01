const React = require('react');
const ClientActions = require('../../../actions/client_actions');

const ProfileTabBar = React.createClass({
  render(){
    return(
      <div className="profile-tab-bar">
        <div className="profile-tabs">
          <button className="profile-tab-button timeline-tab">Timeline</button>
          <button className="profile-tab-button about-tab">About</button>
          <button className="profile-tab-button friends-tab">Friends</button>
          <button className="profile-tab-button photos-tab">Photos</button>
        </div>
      </div>
    );
  }
});

module.exports = ProfileTabBar;
