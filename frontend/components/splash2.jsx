const React = require('react');
const ClientActions = require('../actions/client_actions');
const LoginForm = require('./splash_subcomponents/login_form2');
const SignupForm = require('./splash_subcomponents/new_user_form2');

const Splash = React.createClass({
  render() {
    return (
      <div className="splash-container">
        <div className='splash-upper'>

        </div>
        <SplashPanel/>
        <div className='splash-lower'>

        </div>
      </div>
    );
  }
});

const SplashPanel = React.createClass({

  getInitialState(){
    return {view: 'demo'}
  },

  handleClick(evt){
    evt.preventDefault();
    if(this.state.view === 'login' && evt.target.id === 'login'){this.handleSubmit();}
    this.setState({view: evt.target.id});
    // console.log(evt.target.id);
  },

  handleSubmit(){
    const email = document.getElementById('login-email').value;
    const pw = document.getElementById('login-pw').value;
    const data = { user: {email: email, password: pw} };
    console.log(data);
    ClientActions.login(data);
  },

  // automatically sends credentials for login
  demoLogin(evt){
    evt.preventDefault();
    const data = { user: {email: "your thoughts", password: "let there be light"} };
    ClientActions.login(data);
  },

  render(){
    let text = "";
    let form = <div/>;
    switch(this.state.view){
      case 'demo':
        text = 'GUEST LOG IN'
        form = <div />;
        break;
      case 'login':
        text = 'LOG IN'
        form = <LoginForm />;
        break;
      case 'signup':
        text = 'GET STARTED'
        form = <SignupForm />;
        break;
      }

    return(
      <div className='splash-panel'>
        <div className='splash-form-container'>
          {form}
        </div>
        <div className='splash-button-bar'>
          <div
            className={`splash-button signup`} id='signup'
            onClick={this.handleClick}>SIGN UP</div>
          <div
            className={`splash-button submit`} id='submit'
            onClick={this.demoLogin}>GUEST LOGIN</div>
          <div
            className={`splash-button login`} id='login'
            onClick={this.handleClick}>LOG IN</div>
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
