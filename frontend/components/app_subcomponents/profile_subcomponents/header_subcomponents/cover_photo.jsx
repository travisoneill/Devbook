const React = require('react');
const Transform = require('../../../../constants/transformations');
const PhotoUploadButton = require('../../../util/upload_button');

const CoverPhoto = React.createClass({

  render() {
    let coverUrl = this.props.user ? this.props.user.cover_pic_url : "";
    let cover = Transform.coverPhoto(coverUrl);
    let name = this.props.user ? this.props.user.full_name : "";
    return (
      <div className="cover-photo">
        <div className="cover-photo-overlay">
          <PhotoUploadButton action="cover" location={"cover"} />
        </div>
        <img src={cover} />
        <h4 className="profile-name">{name}</h4>
      </div>
    );
  }

});

module.exports = CoverPhoto;
