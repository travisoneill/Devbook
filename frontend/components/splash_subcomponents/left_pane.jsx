const React = require('react');
const DemoLogin = require('./demo_login');

const SplashLeftPane = React.createClass({
  render() {
    return (
      <div className="splash-left-pane">
        <h4>LeftPane</h4>
        <DemoLogin />
      </div>
    );
  }
});

module.exports = SplashLeftPane;
