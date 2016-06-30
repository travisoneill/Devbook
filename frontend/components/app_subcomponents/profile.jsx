const React = require('react');
const ClientActions = require('../../actions/client_actions');

const AppSidebar = React.createClass({
  render(){
    return(
      <div className="profile-pane">
        <div className="profile-header">
          <ProfileHeader />
        </div>
        <div className="profile-sidebar">
          <ProfileSidebar />
        </div>
        <div className="profile-content">
          
        </div>
      </div>
    );
  }
});

module.exports = AppSidebar;
