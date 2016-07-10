const React = require('react');
const NewUserForm = require('./new_user_form');
const LoginForm = require('./login_form');

const SplashRightPane = React.createClass({
  render() {
    return (
      <div className="splash-right-pane">
        <LoginForm />
        <NewUserForm />
      </div>
    );
  }
});

module.exports = SplashRightPane;
