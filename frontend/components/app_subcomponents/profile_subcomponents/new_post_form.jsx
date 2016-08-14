const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const PhotoUploadButton = require('../../util/upload_button');
const CurrentUserStore = require('../../../stores/current_user_store');
const PhotoUrlStore = require('../../../stores/photo_url_store');
const Transform = require('../../../constants/transformations');

//form to create posts at top of timeline
const NewPostForm = React.createClass({

  getInitialState() {
    return { body: "", url: "", user: CurrentUserStore.get() };
  },

  bodyChange(e){
    e.preventDefault();
    const val = e.target.value;
    this.setState({body: val});
  },

  handleSubmit(e){
    e.preventDefault();
    const params = {
      body: this.state.body,
      user_id: this.state.user.id,
      thumbnail_url: this.state.user.profile_pic_url,
      photo_url: PhotoUrlStore.get() //stores url of uploaded photo until submit
    };
    this.setState({body: ""});
    ServerActions.resetUrl();
    ClientActions.createPost(params);
  },

  render(){
    const profileUrl = this.state.user ? this.state.user.profile_pic_url : undefined;
    const thumbnail = profileUrl ? Transform.profilePic2(profileUrl) : "";
    return(
      <div className="new-post-form">
        <div className='flex-img-container'>
          <img className="post-form-thumbnail" src={thumbnail} />
        </div>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input type="text"
                className="post-form-input"
                placeholder="Make a Post"
                onChange={this.bodyChange}
                value={this.state.body} />
        </form>
        <PhotoUploadButton action="post" location={'post-form-button'} />
      </div>
    );
  }
});

module.exports = NewPostForm;
