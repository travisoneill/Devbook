const React = require('react');
const ClientActions = require('../../actions/client_actions');
const Api = require('../../util/api_calls');
const CurrentUserStore = require('../../stores/current_user_store');
const SelectedUserStore = require('../../stores/selected_user_store');
const FriendStore = require('../../stores/friend_store');
const ServerActions = require('../../actions/server_actions');

let renderCount = 0;

const AddFriend = React.createClass({

  getInitialState(){
    return {status: "none"};
  },

  componentDidMount(){
    let current = this.props.current;
    let selected = this.props.selected;
    if(current && selected && current.id !== selected.id){
      this.getStatus(current, selected);
    }
  },

  componentWillReceiveProps(newProps){
    let current = newProps.current;
    let selected = newProps.selected;
    if(current && selected && current.id !== selected.id){
      this.getStatus(current, selected);
    }
  },

  componentWillUpdate(){

  },

  _onResponse(resp){
    // console.log(resp);
    if(this.isMounted()){
      this.setState({status: resp[0]});
    }
  },

  getStatus(current, selected){
    Api.buttonState(current, selected, this._onResponse);
  },


  sendRequest(e){
    e.preventDefault();
    let id1 = this.props.current.id;
    let id2 = this.props.selected.id;
    const data = { request: { initiator_id: id1, recipient_id: id2 } };
    Api.sendRequest(data, this._handleState);
  },

  withdrawRequest(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    Api.withdrawRequest(initiator, target, this._handleState);
  },

  acceptRequest(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    ServerActions.acceptRequest(this.props.selected);
    Api.acceptRequest(initiator, target, this._handleState);
  },

  unfriend(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    ServerActions.removeFriend(this.props.selected);
    Api.unfriend(initiator, target, this._handleState);
  },

  declineRequest(e){
    e.preventDefault();

  },

  _handleState(){
    if(this.isMounted()){
      switch(this.state.status){
        case "none":
          this.setState({status: "outgoing"});
          break;
        case "outgoing":
          this.setState({status: "none"});
          break;
        case "friends":
          this.setState({status: "none"});
          break;
        case "incoming":
          this.setState({status: "friends"});
          break;
      }
    }
  },

  render(){

    let text = '';
    let action = '';

    switch(this.state.status){
      case "none":
        text = "Add Friend";
        action = this.sendRequest;
        break;
      case "friends":
        text = "Unfriend";
        action = this.unfriend;
        break;
      case "incoming":
        text = "Accept Request";
        action = this.acceptRequest;
        break;
      case "outgoing":
        text = "Withdraw Request";
        action = this.withdrawRequest;
        break;

    }

    let className = this.props.location;

    let component = (
        <button className={`request-button ${className}` } onClick={action} >{text}</button>
    );

    let current = this.props.current;
    let selected = this.props.selected;

    if(current && selected && current.id === selected.id){
      component = <div className="empty" />;
    }

    return(
      <div className={className}>
        {component}
      </div>
    );
  }

});

module.exports = AddFriend;
//if friends -> Unfriend
//if not friends -> Add Friend
//request send -> Withdraw request
//incoming req -> Accept Request
