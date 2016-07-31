const React = require('react');
const Transform = require('../../../../constants/transformations');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const Link = require('react-router').Link;
const CommentIndex = require('./comment_index');
const ClientActions = require('../../../../actions/client_actions');


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
    const post = this.props.post;
    const val = this.state.comment;
    const id = CurrentUserStore.get().id;
    debugger;
    ClientActions.addComment({body: this.state.comment, user_id: id, post_id: post.id});
    this.setState({comment: ''});
  },

  makeTimestamp(){
    const t0 = new Date (this.props.post.created_at);
    const t1 = new Date();
    const seconds = ~~((t1 - t0) / 1000);
    let text = '';
    if(seconds < 60){text = `${seconds} seconds ago`;}
    else if(seconds < 3600 ){text = `${~~(seconds / 60)} minutes ago`;}
    else if(seconds / 3600 < 24){text = `${~~(seconds / 3600)} hours ago`;}
    else if(seconds / 3600 / 24 < 30){text = `${~~(seconds / 3600 / 24)} days ago`;}
    else if(seconds / 3600 / 24 / 30 < 365){text = `${~~(seconds / 3600 / 24/ 30)} months ago`;}
    else {text = `${~~(seconds / 3600 / 24 / 30 / 365)} months ago`;}
    return text;
  },

  render(){
    const url = this.props.post.photo_url;
    const user = SelectedUserStore.get();
    const time = this.makeTimestamp();

    let profilePic = '';
    let thumbnail = '';
    let comment = '';
    if(user){
      profilePic = user.profile_pic_url;
      thumbnail = Transform.profilePic2(profilePic);
      comment = Transform.profilePic3(CurrentUserStore.get().profile_pic_url);
    }
    const photo = url ? Transform.postPic(url) : '';
    return(
      <div className="timeline-index-item">
        <div className="post-display">
          <Link to={`/timeline/${user.id}`}>
            <img className="post-header-pic" src={thumbnail} />
            <span className="post-name">{user.full_name}</span><br/>
            <span className="post-timestamp">{time}</span>
          </Link>
          <p className="post-text">{this.props.post.body}</p>
          <img className="post-photo" src={photo} />
        </div>
        <CommentIndex post={this.props.post} />
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
