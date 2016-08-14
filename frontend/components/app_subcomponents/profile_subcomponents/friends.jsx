const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const ServerActions = require('../../../actions/server_actions');
const Default = require('../../../constants/defaults');
const FriendIndex = require('./friend_index');
const SelectedUserStore = require('../../../stores/selected_user_store');

//container for photo wall in 'friends' component
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
    //prevents re-render if no change in user
    if(newProps.params.id && this.props.params.id && newProps.params.id !== this.props.params.id){
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
        <img src={Default.fh_icon} className='header-icon friends' />
        <h4 className='friends-header-title'>Friends</h4>
        <FriendIndex user={user} />
      </div>
    );
  }
});

module.exports = Friends;
