const React = require('react');
const Api = require('../../util/api_calls');
const CurrentUserStore = require('../../stores/current_user_store');
const SelectedUserStore = require('../../stores/selected_user_store');
const ServerActions = require('../../actions/server_actions');

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

  //gets friend or request status from relation object in store
  getStatus(current, selected){
    this.setState({status: CurrentUserStore.relation(selected.id)});
  },

  //sends API call to create a Requesting object in the DB
  sendRequest(e){
    e.preventDefault();
    let id1 = this.props.current.id;
    let id2 = this.props.selected.id;
    const data = { request: { initiator_id: id1, recipient_id: id2 } };
    Api.sendRequest(data, this._handleState);
  },
  //sends API call to destroy Requesting object
  withdrawRequest(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    Api.withdrawRequest(initiator, target, this._handleState);
  },
  //sends API call to create Friendship object in DB and destroy corresponding
  //Requesting object
  acceptRequest(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    ServerActions.acceptRequest(this.props.selected);
    Api.acceptRequest(initiator, target, this._handleState);
  },
  //sends API call to destroy Friendship object in DB
  unfriend(e){
    e.preventDefault();
    let initiator = this.props.current.id;
    let target = this.props.selected.id;
    ServerActions.removeFriend(this.props.selected);
    Api.unfriend(initiator, target, this._handleState);
  },

  declineRequest(e){
    e.preventDefault();
    //not yet implemented
  },

  //changes button styling and functionality based on changed status
  // based on button action.  Assumes backend has acted properly.  Maybe
  // implement a check here.
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
    //stets styling and action based on friendship status
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
    //appends this prop to the class to allow seperate styling based on caller
    let className = this.props.location;

    let component = (
        <button className={`request-button ${className}` } onClick={action} >{text}</button>
    );

    let current = this.props.current;
    let selected = this.props.selected;
    //prevents button display on own profile
    if(current && selected && current.id === selected.id){
      component = <div className="empty" />;
    }

    return(
      <div className={`${className}-container`}>
        {component}
      </div>
    );
  }

});

module.exports = AddFriend;
