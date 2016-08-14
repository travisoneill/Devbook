const React = require('react');
const MutualFriends = require('./mutual_friends');
const RecentPhotos = require('./recent_photos');

//contains mutual friends and recent photos components on right side of timeline
const TimelineSidebar = React.createClass({
  render(){

    return(
      <div className="timeline-sidebar">
        <MutualFriends user={this.props.user} />
        <RecentPhotos user={this.props.user} />
      </div>
    );
  }
});

module.exports = TimelineSidebar;
