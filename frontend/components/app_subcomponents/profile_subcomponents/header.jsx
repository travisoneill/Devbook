const React = require('react');
const TabBar = require('./header_subcomponents/tab_bar');
const CoverPhoto = require('./header_subcomponents/cover_photo');
const ProfilePic = require('./header_subcomponents/profile_pic');

const ProfileHeader = React.createClass({
  render(){
    return(
      <div className="profile-header">
        <CoverPhoto user={this.props.user} />
        <TabBar user={this.props.user} />
        <ProfilePic user={this.props.user} />
      </div>
    );
  }
});

module.exports = ProfileHeader;


//let div = document.getElementsByClassName('className')
//window.getComputedStyle(div[0]).height
