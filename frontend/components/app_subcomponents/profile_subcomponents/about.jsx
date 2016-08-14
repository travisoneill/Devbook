const React = require('react');
const Default = require('../../../constants/defaults');

//placeholder until compnent is implemented
const About = React.createClass({
  render(){
    return(
      <div className="about-content">
          <div className='about-header'>
            <img className='header-icon about' src={Default.about_icon}/>
            <p className='about-title'>About</p>
          </div>
          <div className='about-sidebar'>

          </div>
          <div className='about-main'>

          </div>
      </div>
    );
  }
});

module.exports = About;
