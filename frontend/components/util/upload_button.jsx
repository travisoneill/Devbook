const React = require('react');
const ClientActions = require('../../actions/client_actions');
const ServerActions = require('../../actions/server_actions');
const URL = require('../../constants/defaults');
const CurrentUserStore = require('../../stores/current_user_store');

const PhotoUploadButton = React.createClass({

  // getInitialState(){
  //   let type = "general";
  //   if(this.props.cover === true){ type = "cover" ;}
  //   if(this.props.profile === true){ type = "profile" ;}
  //   return {type: type };
  // },

  upload(e){
    e.preventDefault();
    let action = ClientActions.postImage;
    if(this.props.action === "cover"){ action = ClientActions.postCoverPhoto;}
    if(this.props.action === "profile"){ action = ClientActions.postProfilePic ;}
    if(this.props.action === "post"){ action = ServerActions.storeUrl ;}
    if(this.props.action === "wall"){ action = ClientActions.addPhoto ;}
    const button = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        action(results[0]);
      }
    });
  },

  render(){
    return(
      <button className={`photo-upload-button ${this.props.location}`}
              onClick={this.upload}>
        <img className="upload-image" src={URL.camera} />
      </button>
    );
  }
});

module.exports = PhotoUploadButton;
