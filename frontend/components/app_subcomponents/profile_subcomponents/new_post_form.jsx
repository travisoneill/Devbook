const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const PhotoUploadButton = require('../../util/upload_button');
const CurrentUserStore = require('../../../stores/current_user_store');
const PhotoUrlStore = require('../../../stores/photo_url_store');
const Transform = require('../../../constants/transformations');

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
      photo_url: PhotoUrlStore.get()
    };
    ServerActions.resetUrl();
    ClientActions.createPost(params);
  },

  render(){
    return(
      <div className="new-post-form">
        <img className="post-form-thumbnail"
            src={Transform.profilePic2(this.state.user.profile_pic_url)} />
        <PhotoUploadButton action="post" />
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input type="text"
                className="post-form-input"
                placeholder="Make a Post"
                onChange={this.bodyChange}
                value={this.state.body} />
        </form>
      </div>
    );
  }
});

// <input type="submit" value="Post" />


module.exports = NewPostForm;
