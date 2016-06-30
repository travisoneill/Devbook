const React = require('react');
const NewUserForm = require('./new_user_form');
const LoginForm = require('./login_form');
const Demo = require('./demo_login');

const Splash = React.createClass({
  render() {
    return (
      <div className="splash-container">
        <div className="splash-titlebar" >
          <div className="logo-container">
            <p className="logo-text">LOGO HERE</p>
          </div>
          <div className="search-container">
          </div>
          <LoginForm className="login_form" />
        </div>
        <div className="left-pane">
          <h3>Splash</h3><br />
          <Demo />
        </div>
        <div className="new-user-form-container">
          <NewUserForm className="new-user-form" /><br /><br />
        </div>
      </div>
    );
  }
});

// <input className="searchbar" type="text" placeholder="Search"/>


module.exports = Splash;
