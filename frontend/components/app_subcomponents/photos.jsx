const React = require('react');
const ClientActions = require('../../actions/client_actions');
const ProfileHeader = require('./profile_subcomponents/header');
const ProfileSidebar = require('./profile_subcomponents/sidebar');
const ProfileContent = require('./profile_subcomponents/content');
const SelectedUserStore = require('../../stores/selected_user_store');
const PhotosSub = require('./profile_subcomponents/photos');

const Photos = React.createClass({

  // getInitialState() {
  //   return { user: this.props.user };
  // },
  //
  // componentDidMount() {
  //   this.listener = SelectedUserStore.addListener(this._onChange);
  // },
  //
  // _onChange(){
  //   this.setState({ user: SelectedUserStore.get() });
  // },
  //
  // componentWillUnmount(){
  //   this.listener.remove();
  // },

  render(){
    return(
      <div className="profile-pane">
        <ProfileHeader user={this.props.user} />
        <ProfileSidebar user={this.props.user} />
        <PhotosSub user={this.props.user} />
      </div>
    );
  }
});

module.exports = Photos;
