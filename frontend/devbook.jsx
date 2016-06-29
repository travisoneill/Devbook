const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;

const UserForm = require('./components/new_user_form');
const Store = require('./stores/current_user_store');
window.Store = Store;

const App = React.createClass({
  render(){
    let user = Store.get().full_name;
    let text = '';
    if(user){text = `Logged in as ${user}`;}
    return(
    <div>
      <h3>React Is Working</h3>
      <UserForm /><br/>
      <h4>{text}</h4>
    </div>
    );
  }

});

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
  const content = document.getElementById('content');
  ReactDOM.render(<App />, content);
});
