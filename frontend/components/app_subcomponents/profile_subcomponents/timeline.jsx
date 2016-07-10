const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');
const TimelineSidebar = require('./timeline/sidebar');
const SelectedUserStore = require('../../../stores/selected_user_store');

const Timeline = React.createClass({

  getInitialState(){
    return({user: SelectedUserStore.get()});
  },

  componentDidMount(){
    this.listener = SelectedUserStore.addListener(this._onChange);
  },

  componentWillReceiveProps(newProps){
    if(newProps.params.id){
      ClientActions.selectUser(newProps.params.id);
    }
  },

  _onChange(){
    this.setState({user: SelectedUserStore.get()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    return(
      <div className="profile-container">
        <TimelineSidebar user={this.state.user} />
        <div className="profile-content">
          <NewPostForm user={this.state.user} />
          <TimelineIndex user={this.state.user} />
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
