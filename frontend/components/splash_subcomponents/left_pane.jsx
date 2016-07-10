const React = require('react');
const DemoLogin = require('./demo_login');
const Defaults = require('../../constants/defaults');
const Transform = require('../../constants/transformations');

const SplashLeftPane = React.createClass({
  render() {
    const url = Transform.splashLogo(Defaults.logo_text_black);
    return (
      <div className="splash-left-pane">
        <div className="splash-logo-container">
          <img src={url} className="splash-logo-text" />
        </div>
        <DemoLogin />
      </div>
    );
  }
});
// <img src={} className="splash-logo-text" />

module.exports = SplashLeftPane;
