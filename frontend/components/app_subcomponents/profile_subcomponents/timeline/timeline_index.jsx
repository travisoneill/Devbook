const React = require('react');
const TimelineIndexItem = require('./timeline_index_item');
const PostStore = require('../../../../stores/post_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');

//displays most recent posts in timeline
const TimelineIndex = React.createClass({
  getInitialState(){
    return { posts: PostStore.all() };
  },

  componentDidMount(){
    this.listener = PostStore.addListener(this._onChange);
    //shows friends posts on own timeline but only users post on others
    const selector = this.props.user.id === CurrentUserStore.get().id;
    ClientActions.getTimeline(this.props.user.id, selector);
  },

  componentWillReceiveProps(newProps){
    if(newProps.user && this.props.user && newProps.user.id !== this.props.user.id){
      //shows friends posts on own timeline but only users post on others
      const selector = newProps.user.id === CurrentUserStore.get().id;
      ClientActions.getTimeline(newProps.user.id, selector);
    }
  },

  _onChange(){
    this.setState({posts: PostStore.all()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    const index = this.state.posts.map( (post) => {
      return <TimelineIndexItem key={post.id} post={post} />;
    });
    return(
      <div className="timeline-index">
        {index}
      </div>
    );
  }
});

module.exports = TimelineIndex;
