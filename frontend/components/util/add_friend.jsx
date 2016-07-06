const React = require('react');

const AddFriend = React.createClass({

  // getInitialState(){
  // },



  render(){
    return(
      <div className="request-button-container">
        <button className="request-button">Add Friend</button>
      </div>
    );
  }

});

//if friends -> Unfriend
//if not friends -> Add Friend
//request send -> Withdraw request
//incoming req -> Accept Request
