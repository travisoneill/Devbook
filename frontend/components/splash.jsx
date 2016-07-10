const React = require('react');
const RightPane = require('./splash_subcomponents/right_pane');
const LeftPane = require('./splash_subcomponents/left_pane');
const Titlebar = require('./splash_subcomponents/titlebar');

const Splash = React.createClass({
  render() {
    return (
      <div className="splash-container">
        <LeftPane />
        <RightPane />
      </div>
    );
  }
});

module.exports = Splash;


// <Titlebar />


// <div className="splash-container">
//   <div className="splash-titlebar" >
//     <div className="logo-container">
//       <p className="logo-text">LOGO HERE</p>
//     </div>
//     <div className="search-container">
//       <input className="searchbar" type="text" placeholder="Search"/>
//     </div>
//     <LoginForm className="login_form" />
//   </div>
//   <div className="left-pane">
//     <h3>Splash</h3>
//     <NewUserForm className="new-user-form" />
//   </div>
// </div>
