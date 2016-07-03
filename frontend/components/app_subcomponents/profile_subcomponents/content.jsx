const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');

const ProfileContent = React.createClass({
  render(){
    return(
      <div className="profile-content">
        <NewPostForm user={this.props.user} />
        <TimelineIndex user={this.props.user} />
      </div>
    );
  }
});

module.exports = ProfileContent;
