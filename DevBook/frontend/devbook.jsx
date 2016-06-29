const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router
const Route = require('react-router').Route
const IndexRoute = require('react-router').IndexRoute



const App = React.createClass({

  render(){
    return(
    <div>React Is Working</div>
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
