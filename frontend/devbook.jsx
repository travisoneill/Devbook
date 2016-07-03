const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const ServerActions = require('./actions/server_actions');
const Splash = require('./components/splash');
const App = require('./components/app');


const UserForm = require('./components/splash_subcomponents/new_user_form');
const CurrentUserStore = require('./stores/current_user_store');
const SelectedUserStore = require('./stores/selected_user_store');

window.CurrentUserStore = CurrentUserStore;
window.SelectedUserStore = CurrentUserStore;

const Root = React.createClass({

  getInitialState() {
    return { user : CurrentUserStore.get(),
      selectedUser: SelectedUserStore.get() };
  },

  componentDidMount() {
    CurrentUserStore.addListener(this._onChange);
    SelectedUserStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({user: CurrentUserStore.get()});
    this.setState({user: SelectedUserStore.get()});
  },

  render(){
    let text = '';
    let Component = Splash;
    let user = this.state.user;
    let selectedUser = this.state.selectedUser;
    if(user){
      text = `Logged in as ${user.full_name}`;
      Component = App;
    }

    return(
    <div className="root">
      <Component user={user} selectedUser={selectedUser} /><br/>
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

// const routes = (
//   <Router>
//     <Route path="/" component={App} >
//       <IndexRoute component={Wall} />
//       <Route path="/wall" component={Wall} />
//       <Route path="/timeline/(:id)" component={Timeline} />
//       <Route path="/about/(:id)" component={About} />
//       <Route path="/friends/(:id)" component={Friends} />
//       <Route path="/photos/(:id)" component={Photos} />
//     </Route>
//   </Router>
// )


document.addEventListener("DOMContentLoaded", () => {
  Setup.currentUser();
  const content = document.getElementById('content');
  console.log("Welcome to the DevBook Console!");
  ReactDOM.render(<Root />, content);
});
