const React = require('react');
const ClientActions = require('../../actions/client_actions');
const ProfileHeader = require('./profile_subcomponents/header');
const ProfileSidebar = require('./profile_subcomponents/sidebar');

const Profile = React.createClass({
  render(){
    return(
      <div className="profile-pane">
        <div className="profile-header">
          <h4>Profile Header</h4>
        </div>
        <div className="profile-sidebar">
          <h4>Profile Sidebar</h4>

        </div>
        <div className="profile-content">
          <h4>Profile Content</h4>
        </div>
      </div>
    );
  }
});

// <div className="profile-pane">
//   <div className="profile-header">
//     <ProfileHeader />
//   </div>
//   <div className="profile-sidebar">
//     <ProfileSidebar />
//   </div>
//   <div className="profile-content">
//     <h4>Profile Content</h4>
//   </div>
// </div>


module.exports = Profile;
