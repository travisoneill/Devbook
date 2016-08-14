const React = require('react');
const TabBar = require('./header_subcomponents/tab_bar');
const CoverPhoto = require('./header_subcomponents/cover_photo');
const ProfilePic = require('./header_subcomponents/profile_pic');
const CurrentUserStore = require('../../../stores/current_user_store');
const AddFriend = require('../../util/add_friend');

//container for header component in the user profile
const ProfileHeader = React.createClass({

  render(){
    let currentUser = CurrentUserStore.get();

    return(
      <div className="profile-header">
        <CoverPhoto user={this.props.user} />
        <TabBar user={this.props.user} location={this.props.location} />
        <ProfilePic user={this.props.user} />
        <AddFriend current={currentUser} selected={this.props.user} location={"header-friend-button"} />
      </div>
    );
  }
});

module.exports = ProfileHeader;
