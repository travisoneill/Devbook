const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const TabBar = require('./tab_bar');
const Transform = require('../../../constants/transformations');
const PhotoUploadButton = require('../../util/upload_button');

const ProfileHeader = React.createClass({
  render(){
    let url = this.props.user ? this.props.user.profile_pic_url : "";
    let profile = Transform.profilePic(url);
    return(
      <div className="profile-header">
        <div className="cover-photo">
          <PhotoUploadButton profile={false} cover={true} />
        </div>
        <TabBar />
        <div className="profile-pic">
          <PhotoUploadButton profile={true} cover={false} />
          <img src={profile} />
        </div>
      </div>
    );
  }
});

module.exports = ProfileHeader;


//let div = document.getElementsByClassName('className')
//window.getComputedStyle(div[0]).height
