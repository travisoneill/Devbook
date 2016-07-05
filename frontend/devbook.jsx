const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const hashHistory = require('react-router').hashHistory;
const ServerActions = require('./actions/server_actions');

const Splash = require('./components/splash');
const App = require('./components/app');

const Profile = require('./components/app_subcomponents/profile');
const Timeline = require('./components/app_subcomponents/profile_subcomponents/timeline');
const About = require('./components/app_subcomponents/profile_subcomponents/about');
const Photos = require('./components/app_subcomponents/profile_subcomponents/photos');
const Friends = require('./components/app_subcomponents/profile_subcomponents/friends');


// const UserForm = require('./components/splash_subcomponents/new_user_form');
const CurrentUserStore = require('./stores/current_user_store');
const SelectedUserStore = require('./stores/selected_user_store');

window.CurrentUserStore = CurrentUserStore;
window.SelectedUserStore = CurrentUserStore;

const Root = React.createClass({

  getInitialState() {
    return { user : CurrentUserStore.get(),
      selectedUser: SelectedUserStore.get()
    };
  },

  componentDidMount() {
    this.listener1 = CurrentUserStore.addListener(this._onChange1);
    this.listener2 = SelectedUserStore.addListener(this._onChange2);
  },

  _onChange1(){
    this.setState({user: CurrentUserStore.get()});
  },

  _onChange2(){
    this.setState({selectedUser: SelectedUserStore.get()});
  },

  componentWillUnmount(){
    this.listener1.remove();
    this.listener2.remove();
  },

  render(){
    let text = '';
    let component = <Splash />;
    let user = this.state.user;
    let selectedUser = this.state.selectedUser;
    if(user){
      text = `Logged in as ${user.full_name}`;
      component = AppRouter;
    }

    return(
    <div className="root">
      {component}<br/>
      <h4>{text}</h4>
    </div>
    );
  }

});

const Setup = {
  currentUser(){
    let user = window.bootstrap.user;
    ServerActions.storeCurrentUser(user);
    //This could be a problem later!!!
    //need to seperate from filling selscted user store.
  }
};
//
const AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route component={Profile} >
        <IndexRoute component={Timeline}/>
        <Route path="/timeline/(:id)" component={Timeline} />
        <Route path="/about/(:id)" component={About} />
        <Route path="/friends/(:id)" component={Friends} />
        <Route path="/photos/(:id)" component={Photos} />
      </Route>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", () => {
  Setup.currentUser();
  const content = document.getElementById('content');
  console.log("Welcome to the DevBook Console!");
  ReactDOM.render(<Root />, content);
});
