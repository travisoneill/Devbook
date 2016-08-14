const React = require('react');
const Transform = require('../../../../constants/transformations');
const PhotoUploadButton = require('../../../util/upload_button');

//contains profile pic on profile header
const ProfilePic = React.createClass({

  render() {
    let profileUrl = this.props.user ? this.props.user.profile_pic_url : "";
    let profile = Transform.profilePic(profileUrl);
    return (
      <div className="profile-pic">
        <div className="profile-pic-overlay">
          <PhotoUploadButton action="profile" location={"profile"} />
        </div>
        <img className="profile-img" src={profile} />
      </div>
    );
  }

});

module.exports = ProfilePic;
