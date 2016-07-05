const React = require('react');
const ClientActions = require('../../actions/client_actions');
const ProfileHeader = require('./profile_subcomponents/header');
const ProfileSidebar = require('./profile_subcomponents/sidebar');
const ProfileContent = require('./profile_subcomponents/content');
const SelectedUserStore = require('../../stores/selected_user_store');

const Profile = React.createClass({

  getInitialState() {
    return { user: this.props.user };
  },

  componentDidMount() {
    this.listener = SelectedUserStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({ user: SelectedUserStore.get() });
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    return(
      <div className="profile-pane">
        <ProfileHeader user={this.state.user} />
        <ProfileSidebar user={this.state.user} />
        {React.cloneElement(this.props.children, {user: this.state.user})}
      </div>
    );
  }
});

// {React.cloneElement(this.props.children), {user: this.state.user}}

// <ProfileContent user={this.props.user} />
module.exports = Profile;
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
