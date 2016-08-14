const React = require('react');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const hashHistory = require('react-router').hashHistory;

//contains main navigation links to 'timeline', 'photos' % 'friends' content
const ProfileTabBar = React.createClass({
  //constructs route based on which link clicked and pushes to hash history
  handleClick(e){
    e.preventDefault();
    let id = SelectedUserStore.get().id;
    let route = `/${e.target.textContent.toLowerCase()}/${id}`;
    hashHistory.push(route);
  },
  //disables button corresponding to currently active component
  checkStatus(name){
    const route = this.props.location.pathname;
    let disabled = route.match(name) ? true : false;
    if(route === "/" && name === "timeline"){disabled = true;}
    return disabled;
  },

  render(){
    return(
      <div className="profile-tab-bar">
        <div className="profile-tabs">
          <button className="profile-tab-button timeline-tab"
                  onClick={this.handleClick}
                  disabled={this.checkStatus("timeline")}>Timeline</button>
          <button className="profile-tab-button friends-tab"
                  onClick={this.handleClick}
                  disabled={this.checkStatus("friends")}>Friends</button>
          <button className="profile-tab-button photos-tab"
                  onClick={this.handleClick}
                  disabled={this.checkStatus("photos")}>Photos</button>
        </div>
      </div>
    );
  }
});

module.exports = ProfileTabBar;

//About button currently unused
// <button className="profile-tab-button about-tab"
//   onClick={this.handleClick}
//   disabled={this.checkStatus("about")}>About</button>
