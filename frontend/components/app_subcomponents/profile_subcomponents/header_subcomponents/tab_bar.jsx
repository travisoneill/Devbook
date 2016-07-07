const React = require('react');
// const ClientActions = require('../../../../actions/client_actions');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const hashHistory = require('react-router').hashHistory;


const ProfileTabBar = React.createClass({

  handleClick(e){
    e.preventDefault();
    let id = SelectedUserStore.get().id;
    let route = `/${e.target.textContent.toLowerCase()}/${id}`;
    hashHistory.push(route);
  },


  render(){
    return(
      <div className="profile-tab-bar">
        <div className="profile-tabs">
          <button className="profile-tab-button timeline-tab"
                  onClick={this.handleClick}>Timeline</button>
          <button className="profile-tab-button about-tab"
                  onClick={this.handleClick}>About</button>
          <button className="profile-tab-button friends-tab"
                  onClick={this.handleClick}>Friends</button>
          <button className="profile-tab-button photos-tab"
                  onClick={this.handleClick}>Photos</button>
        </div>
      </div>
    );
  }
});

module.exports = ProfileTabBar;
