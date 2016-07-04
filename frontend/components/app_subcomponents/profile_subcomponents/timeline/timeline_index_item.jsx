const React = require('react');
const Transform = require('../../../../constants/transformations');

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
    const thumbnail = Transform.profilePic2(this.props.post.thumbnail_url);
    const photo = Transform.postPic(this.props.post.photo_url);
    const comment = Transform.profilePic3(CurrentUserStore.get().profile_pic_url);
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
