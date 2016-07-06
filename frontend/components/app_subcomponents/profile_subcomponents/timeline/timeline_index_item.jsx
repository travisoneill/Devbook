const React = require('react');
const Transform = require('../../../../constants/transformations');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');


const TimelineIndexItem = React.createClass({

  getInitialState(){
    return {comment: ''};
  },

  commentChange(e){
    e.preventDefault();
    const val = e.target.value;
    this.setState({comment: val});
  },

  handleSubmit(e){
    e.preventDefault();
    this.setState({comment: ''});
    console.log("Gotta make a comments controller first!");
  },

  render(){
    const url = this.props.post.photo_url;
    const user = CurrentUserStore.get();
    let profilePic = '';
    let thumbnail = '';
    let comment = '';
    if(user){
      profilePic = user.profile_pic_url;
      thumbnail = Transform.profilePic2(profilePic);
      comment = Transform.profilePic3(profilePic);
    }
    const photo = url ? Transform.postPic(url) : '';
    return(
      <div className="timeline-index-item">
        <div className="post-display">
          <img className="post-header-pic" src={thumbnail} />
          <p className="post-text">{this.props.post.body}</p>
          <img className="post-photo" src={photo} />
        </div>
        <div className="comment">
          <img className="comment-thumbnail" src={comment} />
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text"
                  className="comment-form-input"
                  placeholder="Write a Comment..."
                  onChange={this.commentChange}
                  value={this.state.comment} />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TimelineIndexItem;
