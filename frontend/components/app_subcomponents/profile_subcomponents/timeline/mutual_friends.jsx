const React = require('react');
const FriendStore = require('../../../../stores/friend_store');
const PhotoStore = require('../../../../stores/friend_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');


const MutualFriends = React.createClass({

  getInitialState(){
    return { friends: [], count: 0};
  },

  componentDidMount(){
    ClientActions.mutualFriends(this.props.user, CurrentUserStore.get());
    this.listener = FriendStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({friends: FriendStore.all(), count: FriendStore.count()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){

    let title = "Mutual Friends";
    let count = this.state.count;

    if(this.props.user.id === CurrentUserStore.get().id){title = "Friends";}

    return(
      <div className="mutual-friends">
        <h4>{title} - {count}</h4>
      </div>
    );
  }
});

module.exports = MutualFriends;
