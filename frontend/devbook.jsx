const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const hashHistory = require('react-router').hashHistory;
const ServerActions = require('./actions/server_actions');
const ClientActions = require('./actions/client_actions');

const Splash = require('./components/splash2');
const App = require('./components/app');

const Profile = require('./components/app_subcomponents/profile');
const Timeline = require('./components/app_subcomponents/profile_subcomponents/timeline');
const About = require('./components/app_subcomponents/profile_subcomponents/about');
const Photos = require('./components/app_subcomponents/profile_subcomponents/photos');
const Friends = require('./components/app_subcomponents/profile_subcomponents/friends');


// const UserForm = require('./components/splash_subcomponents/new_user_form');
const CurrentUserStore = require('./stores/current_user_store');
const SelectedUserStore = require('./stores/selected_user_store');

const Setup = {
  currentUser(){
    let user = window.bootstrap.user;
    ServerActions.reload(user);
  }
};

const AppRouter = (
  <Router history={hashHistory} >
    <Route path="/" component={App} onEnter={_ensureLogin} >
      <Route component={Profile} onEnter={_ensureLogin} >
        <IndexRoute component={Timeline} onEnter={_ensureLogin} />
        <Route path="/timeline/(:id)" component={Timeline} onEnter={_ensureLogin} />
        <Route path="/about/(:id)" component={About} onEnter={_ensureLogin} />
        <Route path="/friends/(:id)" component={Friends} onEnter={_ensureLogin} />
        <Route path="/photos/(:id)" component={Photos} onEnter={_ensureLogin} />
      </Route>
    </Route>
    <Route path="/splash" component={Splash} />
  </Router>
);

function _ensureLogin(nextState, replace) {
  if(!CurrentUserStore.get()){
    replace('/splash');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Setup.currentUser();
  const content = document.getElementById('content');
  console.log("Welcome to the DevBook Console!");
  ReactDOM.render(AppRouter, content);
});
