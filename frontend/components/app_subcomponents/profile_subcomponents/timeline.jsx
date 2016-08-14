const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');
const TimelineSidebar = require('./timeline/sidebar');

//container for timeline component. recieves props from router and
//passes to children
const Timeline = React.createClass({

  componentDidMount(){
    if(this.props.params.id){
      ClientActions.selectUser(this.props.params.id);
    }
  },

  componentWillReceiveProps(newProps){
    let id = newProps.params.id
    if(id && id !== this.props.params.id){
      ClientActions.selectUser(newProps.params.id);
    }
  },

  //needs to empty on unmount or can be conflicts when rendering 'friends' component
  componentWillUnmount(){
    ServerActions.emptyFriends();
  },

  render(){
    return(
      <div className="profile-container">
        <TimelineSidebar user={this.props.user} />
        <div className="profile-content">
          <NewPostForm user={this.props.user} />
          <TimelineIndex user={this.props.user} />
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
