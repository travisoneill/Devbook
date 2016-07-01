const React = require('react');
const ClientActions = require('../actions/client_actions');
const AppTitlebar = require('./app_subcomponents/titlebar');
const AppSidebar = require('./app_subcomponents/sidebar');
const Profile = require('./app_subcomponents/profile');

const App = React.createClass({
  
  render(){
    return (
      <div className="app-container">
        <AppTitlebar />
        <Profile />
        <AppSidebar />
      </div>
    );
  }
});

// <div className="app-container">
//   <div classnName="app-titlebar">
//     <AppTitlebar />
//     <button onClick={this.logout}>Logout</button>
//   </div>
//   <div className="profile-pane">
//     <Profile />
//   </div>
//   <div className="app-sidebar">
//     <AppSidebar />
//   </div>
// </div>

module.exports = App;
