const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');
const SelectedUserStore = require('../../../stores/current_user_store');

const Timeline = React.createClass({

  getInitialState(){
    return({user: this.props.user});
  },

  componentDidMount(){
    this.listener = SelectedUserStore.addListener(this._onChange);
  },

  componentWillReceiveProps(newProps){
    ClientActions.selectUser(newProps.params.id);
    this.setState({user: SelectedUserStore.get()});
  },

  _onChange(){
    this.setState({user: SelectedUserStore.get()});
  },

  componenetWillUnmount(){
    this.listener.remove();
  },

  render(){
    return(
      <div className="profile-content">
        <NewPostForm user={this.props.user} />
        <TimelineIndex user={this.props.user} />
      </div>
    );
  }
});

module.exports = Timeline;
