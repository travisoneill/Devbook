const React = require('react');
const PhotoIndex = require('./photo_index');
const Default = require('../../../constants/defaults');

const Photos = React.createClass({

  render(){
    return(
      <div className="photos-content">
        <div className='photo-header-container'>
          <img className='header-icon' src={Default.ph_icon}/>
          <h4 className="photos-header-text">Photos</h4>
        </div>
        <PhotoIndex />
      </div>
    );
  }
});

module.exports = Photos;

// <div className="photo-container"><p className="photo-overlay">Text</p></div>
