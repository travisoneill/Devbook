const React = require('react');
const TimelineIndexItem = require('./timeline_index_item');
const PostStore = require('../../../../stores/post_store');
// const SelectedUserStore = require('../../../../stores/selected_user_store');
const ClientActions = require('../../../../actions/client_actions');

const TimelineIndex = React.createClass({
  getInitialState(){
    return { user: SelectedUserStore.get(), posts: PostStore.all() };
  },
  componentDidMount(){
    this.listener = PostStore.addListener(this._onChange);
    ClientActions.getTimeline(this.state.user.id);
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
