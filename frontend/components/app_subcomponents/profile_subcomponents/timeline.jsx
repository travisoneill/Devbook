const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');
const TimelineSidebar = require('./timeline/sidebar');
const SelectedUserStore = require('../../../stores/selected_user_store');

const Timeline = React.createClass({

  // getInitialState(){
  //   return({user: SelectedUserStore.get()});
  // },

  componentDidMount(){
    // this.listener = SelectedUserStore.addListener(this._onChange);
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

  // _onChange(){
  //   this.setState({user: SelectedUserStore.get()});
  // },

  componentWillUnmount(){
    // this.listener.remove();
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
