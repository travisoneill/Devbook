const React = require('react');
const NewPostForm = require('./new_post_form');
const TimelineIndex = require('./timeline/timeline_index');

//contains selected content of timeline.  Holdover from deprecated structure
//should probably be refactored out.
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
