const React = require('react');
const FriendStore = require('../../../stores/friend_store');
const SelectedUserStore = require('../../../stores/selected_user_store');
const CurrentUserStore = require('../../../stores/current_user_store');
const FriendIndexItem = require('./friend_index_item');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');

// const FriendButton = require('../../util/friend_button');
// const Defaults = require('../../../constants/defaults');

const FriendIndex = React.createClass({

  getInitialState(){
    return { friends: [], incoming: [] };
  },

  componentDidMount() {
    const user = SelectedUserStore.get();
    this.listener = FriendStore.addListener(this._onChange);
    this.listener2 = SelectedUserStore.addListener(this._onChange2)
    if(user){ClientActions.getAllFriends(user)};
    if(user.id === CurrentUserStore.get().id){
      ClientActions.getAllIncoming(user);
    }
  },

  componentWillReceiveProps(newProps){
    const user = SelectedUserStore.get();
    if(user){ClientActions.getAllFriends(user);}
    if(user.id === CurrentUserStore.get().id){
      ClientActions.getAllIncoming(user);
    }
  },

  _onChange(){
    this.setState({friends: FriendStore.all(), incoming: FriendStore.incoming()});
  },

  _onChange2(){
    const user = SelectedUserStore.get();
    ClientActions.getAllFriends(user);
    if(SelectedUserStore.get() === CurrentUserStore.get()){
      ClientActions.getAllIncoming(user);
    }
  },

  componentWillUnmount(){
    this.listener.remove();
    this.listener2.remove();
  },

  render(){
    let friends = this.state.friends.map( (friend) => {
      return <FriendIndexItem key={`f${friend.id}`} friend={friend} request={false} />;
    });

    let incoming = this.state.incoming.map( (user) => {
      return <FriendIndexItem key={`i${user.id}`} friend={user} request={true} />;
    });

    let index = incoming.concat(friends);
    let n = (5 - index.length % 5) % 5;
    debugger;
    for (let i = 0; i < n; i++){index.push(<div key={9999999999999999} className='friend-container'/>);}

    let arr1 = index.filter( (el, idx) => idx % 5 === 0);
    let arr2 = index.filter( (el, idx) => idx % 5 === 1);
    let arr3 = index.filter( (el, idx) => idx % 5 === 2);
    let arr4 = index.filter( (el, idx) => idx % 5 === 3);
    let arr5 = index.filter( (el, idx) => idx % 5 === 4);


    return(
      <div className="photo-index">
        <div className='friend-row'>
          {arr1}
        </div>
        <div className='friend-row'>
          {arr2}
        </div>
        <div className='friend-row'>
          {arr3}
        </div>
        <div className='friend-row'>
          {arr4}
        </div>
        <div className='friend-row'>
          {arr5}
        </div>
      </div>
    );
  }
});

module.exports = FriendIndex;
