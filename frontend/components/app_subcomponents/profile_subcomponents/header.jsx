const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const TabBar = require('./tab_bar');


const ProfileHeader = React.createClass({
  render(){
    return(
      <div className="profile-header">
        <div className="cover-photo">
          <p>Cover Photo</p>
        </div>
        <TabBar />
        <div className="profile-pic">
          <p>Profile Pic</p>
        </div>
      </div>
    );
  }
});

module.exports = ProfileHeader;
