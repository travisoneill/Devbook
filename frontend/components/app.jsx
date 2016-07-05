const React = require('react');
const ClientActions = require('../actions/client_actions');
const AppTitlebar = require('./app_subcomponents/titlebar');
const AppSidebar = require('./app_subcomponents/sidebar');
const Profile = require('./app_subcomponents/profile');
const CurrentUserStore = require('../stores/current_user_store');
const SelectedUserStore = require('../stores/selected_user_store');

// const Timeline = require('./app_subcomponents/profile_subcomponents/timeline');
// const About = require('./app_subcomponents/profile_subcomponents/about');
// const Photos = require('./app_subcomponents/profile_subcomponents/photos');
// const Friends = require('./app_subcomponents/profile_subcomponents/friends');


const App = React.createClass({

  render(){
    let currentUser = CurrentUserStore.get();
    let selectedUser = SelectedUserStore.get();
    // let currentUser = this.props.currentUser;
    // let selectedUser = this.props.selectedUser;
    return (
      <div className="app-container">
        <AppTitlebar user={currentUser} />
        {React.cloneElement(this.props.children, {user: selectedUser})}
        <AppSidebar user={currentUser} />
      </div>
    );
  }
});

// <Profile user={selectedUser} />
//


module.exports = App;
