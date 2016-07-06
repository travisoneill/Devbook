const React = require('react');
const ClientActions = require('../../actions/client_actions');
const Api = require('../../util/api_calls');
const CurrentUserStore = require('../../stores/current_user_store');
const SelectedUserStore = require('../../stores/selected_user_store');

const AddFriend = React.createClass({

  getInitialState(){
    return({status: "not_friends"});
  },

  componentDidMount(){
    let current = CurrentUserStore.get();
    let selected = SelectedUserStore.get();
    let status = this.getStatus(current, selected);
    // this.setState({status: ClientActions.buttonState()});
  },

  componentWillUpdate(){

  },

  _onResponse(resp){
    console.log(resp);
  },

  getStatus(current, selected){
    Api.buttonState(current, selected, this._onResponse);
  },


  render(){
    return(
      <div className="request-button-container">
        <button className="request-button">Add Friend</button>
      </div>
    );
  }

});

module.exports = AddFriend;
//if friends -> Unfriend
//if not friends -> Add Friend
//request send -> Withdraw request
//incoming req -> Accept Request
