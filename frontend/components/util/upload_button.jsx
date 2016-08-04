const React = require('react');
const ClientActions = require('../../actions/client_actions');
const ServerActions = require('../../actions/server_actions');
const URL = require('../../constants/defaults');
const CurrentUserStore = require('../../stores/current_user_store');
const SelectedUserStore = require('../../stores/selected_user_store');

const PhotoUploadButton = React.createClass({

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
    let user1 = CurrentUserStore.get().id;
    let user2 = SelectedUserStore.get().id;
    let selector = true;
    if(user1 !== user2){selector = false;}
    if(this.props.location === 'post-form'){selector = true}
    let button = (<button className={`photo-upload-button ${this.props.location}`}
            onClick={this.upload}>
      <img className="upload-image" src={URL.camera} />
    </button>);
    if(!selector){button = <div/>;}
    return(
      <div className='pub-container'>{button}</div>
    );
  }
});

module.exports = PhotoUploadButton;
