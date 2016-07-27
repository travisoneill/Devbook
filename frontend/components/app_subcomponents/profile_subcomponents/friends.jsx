const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const FriendIndex = require('./friend_index');
const SelectedUserStore = require('../../../stores/selected_user_store');


const Friends = React.createClass({

  getInitialState(){
    return {user: ''}
  },

  componentDidMount(){
    this.listener = SelectedUserStore.addListener(this._onChange);
    if(this.props.params.id){
      ClientActions.selectUser(this.props.params.id);
    }
  },

  _onChange(){
    this.setState({user: SelectedUserStore.get()});
  },

  componentWillReceiveProps(newProps){
    if(newProps.params.id){
      ClientActions.selectUser(newProps.params.id);
    }
  },

  componentWillUnmount(){
    this.listener.remove();
    ServerActions.emptyFriends();
  },

  render(){
    let user = this.state.user;
    return(
      <div className="friends-content">
        <h4>Friends</h4>
        <FriendIndex user={user} />
      </div>
    );
  }
});

module.exports = Friends;
