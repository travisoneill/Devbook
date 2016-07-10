const React = require('react');
const Transform = require('../../../constants/transformations');
const Defaults = require('../../../constants/defaults');

const PhotoIndexItem = React.createClass({

  deletePhoto(e){
    e.preventDefault();
  },

  render(){
    const url = Transform.photoWall(this.props.photo.url);
    return(
      <div className="photo-container">
        <div className="photo-overlay">
          <button className="photo-delete-button" onClick={this.deletePhoto}>
            <img src={Defaults.trashcan}/>
          </button>
        </div>
        <img className="photo-wall-item" src={url} />
      </div>
    );
  }
});
// <p className="photo-overlay">Text</p>

module.exports = PhotoIndexItem;

// <div className="photo-container"><p className="photo-overlay">Text</p></div>
