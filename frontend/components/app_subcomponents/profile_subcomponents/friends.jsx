const React = require('react');
const FriendIndex = require('./friend_index');
const Friends = React.createClass({

  render(){
    return(
      <div className="friends-content">
        <h4>Friends</h4>
        <FriendIndex />
      </div>
    );
  }
});

module.exports = Friends;
