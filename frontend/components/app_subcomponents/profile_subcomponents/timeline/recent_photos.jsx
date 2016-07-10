const React = require('react');
const FriendStore = require('../../../../stores/friend_store');
const PhotoStore = require('../../../../stores/friend_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');


const RecentPhotos = React.createClass({
  render(){
    return(
      <div className="recent-photos">
        <h4>RecentPhotos</h4>
      </div>
    );
  }
});

module.exports = RecentPhotos;
