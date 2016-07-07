const React = require('react');

const Photos = React.createClass({

  render(){
    return(
      <div className="photos-content">
        <h4>Photos</h4>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
        <div className="photo-container"><p className="photo-overlay">Text</p></div>
      </div>
    );
  }
});

module.exports = Photos;
