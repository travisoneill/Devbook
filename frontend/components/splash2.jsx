const React = require('react');

const Splash = React.createClass({
  render() {
    return (
      <div>
      </div>
    );
  }
});

// const Splash = React.createClass({
//   render() {
//     return (
//       <div className="splash-container">
//         <div className='splash-upper'>
//
//         </div>
//         <SplashPanel/>
//         <div className='splash-lower'>
//
//         </div>
//       </div>
//     );
//   }
// });

const SplashPanel = React.createClass({
  handleClick(evt){
    evt.preventDefault();
    console.log(evt.target.id);
  },

  render(){
    const text = "SUBMIT FORM"
    return(
      <div className='splash-panel'>
        <div className='splash-form-container'>
        </div>
        <div className='splash-button-bar'>
          <div className={`splash-button signup`} id='signup' onClick={this.handleClick}>SIGN UP</div>
          <div className={`splash-button login`} id='login' onClick={this.handleClick}>LOG IN</div>
          <div className={`splash-button submit`} id='submit' onClick={this.handleClick}>{text}</div>
        </div>
      </div>
    );
  }
});

// const SplashButton = React.createClass({
//   render(){
//     return(
//       <div className={`splash-button ${this.props.id}`}>
//         {this.props.id}
//       </div>
//     );
//   }
// });



module.exports = Splash;
