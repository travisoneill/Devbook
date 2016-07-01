const React = require('react');
const NewUserForm = require('./new_user_form');

const SplashRightPane = React.createClass({
  render() {
    return (
      <div className="splash-right-pane">
        <NewUserForm />
      </div>
    );
  }
});

module.exports = SplashRightPane;
