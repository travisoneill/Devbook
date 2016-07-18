const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const FriendIndex = require('./friend_index');


const Friends = React.createClass({

  componentDidMount(){
    if(this.props.params.id){
      ClientActions.selectUser(this.props.params.id);
    }
  },

  componentWillReceiveProps(newProps){
    if(newProps.params.id){
      ClientActions.selectUser(newProps.params.id);
    }
  },

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
