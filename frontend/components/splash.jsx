const React = require('react');
const NewUserForm = require('./new_user_form');
const LoginForm = require('./login_form');

const Splash = React.createClass({
  render() {
    return (
      <div className="splash-container">
        <div className="splash-titlebar" >
          <div className="logo-container">
            <p className="logo-text">LOGO HERE</p>
          </div>
          <LoginForm className="login_form" />
        </div>
        <div className="left-pane">
          <h3>Splash</h3>
        </div>
        <NewUserForm className="new-user-form" /><br /><br />
      </div>
    );
  }
});

module.exports = Splash;
