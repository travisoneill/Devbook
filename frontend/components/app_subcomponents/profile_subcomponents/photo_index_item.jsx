const React = require('react');
const Transform = require('../../../constants/transformations');

const PhotoIndexItem = React.createClass({
  render(){
    const url = Transform.photoWall(this.props.photo.url);
    return(
      <div className="photo-container">
        <p className="photo-overlay">Text</p>
        <img className="photo-wall-item" src={url} />
      </div>
    );
  }
});

module.exports = PhotoIndexItem;

// <div className="photo-container"><p className="photo-overlay">Text</p></div>
