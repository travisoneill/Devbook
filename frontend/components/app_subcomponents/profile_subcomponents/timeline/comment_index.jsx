const React = require('react');
const PostStore = require('../../../../stores/post_store');
const Transform = require('../../../../constants/transformations');
const Link = require('react-router').Link;

//displays comment at bottom of posts
const CommentIndexItem = React.createClass({
  // turns timestamps into days/weeks... ago
  makeTimestamp(){
    const t0 = new Date (this.props.comment.created_at);
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
    const body = this.props.comment.body;
    const info = PostStore.getInfo(this.props.comment);
    const url = Transform.profilePic3(info.url);
    const time = this.makeTimestamp();
    const name = info.name;
    return(
      <div className="comment-display">
        <div className='comment-img-container'>
          <Link to={`/timeline/${this.props.comment.user_id}`}>
            <img className="comment-thumbnail-pic" src={url} />
          </Link>
        </div>
        <div className='comment-text-container'>
          <Link to={`/timeline/${this.props.comment.user_id}`}>
            <span className="comment-name">{name}</span>
          </Link>
          <span className="comment-timestamp">{time}</span><br/>
          <span className="comment-text">{body}</span>
        </div>
      </div>
    );
  }
});

//index to display all comments for each post
const CommentIndex = React.createClass({

  getInitialState(){
    return {comments: []};
  },

  componentDidMount(){
    this.listener = PostStore.addListener(this._onChange);
    this.setState({comments: PostStore.comments(this.props.post)})
  },

  _onChange(){
    this.setState({comments: PostStore.comments(this.props.post)})
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    let index = [];
    if(this.state.comments){
      index = this.state.comments.map( (comment) => {
        return <CommentIndexItem key={comment.id} comment={comment} />
      });
    }
    return(
      <div className="comment-index">
        {index}
      </div>
    );
  }
});

module.exports = CommentIndex;
