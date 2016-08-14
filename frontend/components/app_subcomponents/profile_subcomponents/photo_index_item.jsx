const React = require('react');
const Transform = require('../../../constants/transformations');
const Defaults = require('../../../constants/defaults');

//items on phot wall in 'photos' component
const PhotoIndexItem = React.createClass({

  deletePhoto(e){
    e.preventDefault();
    //not functional yet
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

module.exports = PhotoIndexItem;
