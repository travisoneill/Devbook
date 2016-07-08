const React = require('react');
const FriendStore = require('../../../stores/friend_store');
const SelectedUserStore = require('../../../stores/selected_user_store');
const FriendIndexItem = require('./friend_index_item');
const ClientActions = require('../../../actions/client_actions');
// const FriendButton = require('../../util/friend_button');
// const Defaults = require('../../../constants/defaults');

const FriendIndex = React.createClass({

  getInitialState(){
    return { friends: [], incoming: [] };
  },

  componentDidMount() {
    const user = SelectedUserStore.get();
    this.listener = FriendStore.addListener(this._onChange);
    ClientActions.getAllFriends(user);
    ClientActions.getAllIncoming(user);
  },

  _onChange(){
    debugger;
    this.setState({friends: FriendStore.all(), incoming: FriendStore.incoming()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){

    const incoming = this.state.incoming.map( (user) => {
      return <FriendIndexItem key={user.id} friend={user} request={true} />;
    });

    const friends = this.state.friends.map( (friend) => {
      return <FriendIndexItem key={friend.id} friend={friend} request={false} />;
    });

    const index = incoming.concat(friends);

    debugger;
    return(
      <div className="photo-index">
        {index}
      </div>
    );
  }
});

module.exports = FriendIndex;
