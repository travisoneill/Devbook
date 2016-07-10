const React = require('react');
const LoginForm = require('./login_form');

const SplashTitlebar = React.createClass({
  render() {
    return (
      <div className="splash-titlebar">
        <div className="splash-logo">
          <p>LOGO</p>
        </div>
      </div>

    );
  }
});

// <LoginForm />
module.exports = SplashTitlebar;
