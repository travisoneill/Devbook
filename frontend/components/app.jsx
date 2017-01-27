const React = require('react');
const ClientActions = require('../actions/client_actions');
const AppTitlebar = require('./app_subcomponents/titlebar');
// const AppSidebar = require('./app_subcomponents/sidebar');
const Profile = require('./app_subcomponents/profile');
const CurrentUserStore = require('../stores/current_user_store');
const SelectedUserStore = require('../stores/selected_user_store');

// const Timeline = require('./app_subcomponents/profile_subcomponents/timeline');
// const About = require('./app_subcomponents/profile_subcomponents/about');
// const Photos = require('./app_subcomponents/profile_subcomponents/photos');
// const Friends = require('./app_subcomponents/profile_subcomponents/friends');


const App = React.createClass({

  getInitialState() {
    return { user : CurrentUserStore.get(),
      selectedUser: SelectedUserStore.get()
    };
  },
  //
  componentDidMount() {
    this.listener1 = CurrentUserStore.addListener(this._onChange1);
    this.listener2 = SelectedUserStore.addListener(this._onChange2);
    let user = CurrentUserStore.get();
    let user2 = SelectedUserStore.get();
    if(user && user2){ClientActions.getRelations(user);}
  },
  //
  _onChange1(){
    this.setState({user: CurrentUserStore.get()});
  },
  //
  _onChange2(){
    this.setState({selectedUser: SelectedUserStore.get()});
  },
  //
  componentWillUnmount(){
    if(this.listener1){
      this.listener1.remove();
    }
    if(this.listener2){
      this.listener2.remove();
    }
  },

  render(){
    let currentUser = CurrentUserStore.get();
    let selectedUser = SelectedUserStore.get();
    // let currentUser = this.props.currentUser;
    // let selectedUser = this.props.selectedUser;
    return (
      <div className="app-container">
        <AppTitlebar user={currentUser} />
        {React.cloneElement(this.props.children, {user: selectedUser})}
      </div>
    );
  }
});
// <AppSidebar user={currentUser} />

// <Profile user={selectedUser} />
//


module.exports = App;
