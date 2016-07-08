const React = require('react');
const Transform = require('../../../constants/transformations');
const FriendButton = require('../../util/add_friend');
const CurrentUserStore = require('../../../stores/current_user_store');

const FriendIndexItem = React.createClass({
  render(){
    let url = this.props.friend.profile_pic_url;
    if(this.props.request === true){
      url = Transform.friendWallBW(url);
    } else {
      url = Transform.friendWall(url);
    }
    const name = this.props.friend.full_name;
    const current = CurrentUserStore.get();
    return(
      <div className="friend-container">
        <p className="friend-overlay">{name}</p>
        <img className="friend-wall-item" src={url} />
        <FriendButton current={current} selected={this.props.friend} location={"friend-index"} />
      </div>
    );
  }
});

module.exports = FriendIndexItem;
