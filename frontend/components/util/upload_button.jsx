const React = require('react');
const ClientActions = require('../../actions/client_actions');
const URL = require('../../constants/defaults');





const PhotoUploadButton = React.createClass({

  getInitialState(){
    let type = "general";
    if(this.props.cover === true){ type = "cover" ;}
    if(this.props.profile === true){ type = "profile" ;}
    return {type: type };
  },

  upload(){

  },

  render(){
    return(
      <button className="photo-upload-button"
              onClick={this.upload} >
        <img src={URL.camera} />
      </button>
    );
  }
});

module.exports = PhotoUploadButton;
