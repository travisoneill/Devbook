const React = require('react');
const PhotoIndex = require('./photo_index');

const Photos = React.createClass({

  render(){
    return(
      <div className="photos-content">
        <h4>Photos</h4>
        <PhotoIndex />
      </div>
    );
  }
});

module.exports = Photos;

// <div className="photo-container"><p className="photo-overlay">Text</p></div>
