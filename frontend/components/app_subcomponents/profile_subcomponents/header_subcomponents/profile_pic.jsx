const React = require('react');
const Transform = require('../../../../constants/transformations');
const PhotoUploadButton = require('../../../util/upload_button');

const ProfilePic = React.createClass({

  render() {
    let profileUrl = this.props.user ? this.props.user.profile_pic_url : "";
    let profile = Transform.profilePic(profileUrl);
    return (
      <div className="profile-pic">
        <PhotoUploadButton action="profile" />
        <img className="profile-img" src={profile} />
      </div>
    );
  }

});

module.exports = ProfilePic;
