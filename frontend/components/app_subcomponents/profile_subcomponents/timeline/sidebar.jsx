const React = require('react');
const TimelineIndexItem = require('./timeline_index_item');
const PostStore = require('../../../../stores/post_store');
const PhotoStore = require('../../../../stores/friend_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');
const MutualFriends = require('./mutual_friends');
const RecentPhotos = require('./recent_photos');

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
