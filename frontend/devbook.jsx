const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const ServerActions = require('./actions/server_actions');
const Splash = require('./components/splash');
const App = require('./components/app');


const UserForm = require('./components/new_user_form');
const CurrentUserStore = require('./stores/current_user_store');
// window.CurrentUserStore = CurrentUserStore;

const Root = React.createClass({

  getInitialState() {
    return { user : CurrentUserStore.get() };
  },

  componentDidMount() {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange(){
    console.log("Change!");
    this.setState({user: CurrentUserStore.get()});
  },

  render(){
    let text = '';
    let Component = Splash;
    let currentUser = this.state.user;
    if(currentUser){
      text = `Logged in as ${currentUser.full_name}`;
      Component = App;
    }
    return(
    <div className="root">
      <Component /><br/>
      <h4>{text}</h4>
    </div>
    );
  }

});

const Setup = {
  currentUser(){
    let user = window.bootstrap.user;
    ServerActions.storeCurrentUser(user);
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
  ReactDOM.render(<Root />, content);
});
