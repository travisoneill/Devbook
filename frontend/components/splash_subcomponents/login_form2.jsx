const React = require('react');
const ClientActions = require('../../actions/client_actions');

const LoginForm = React.createClass({

  getInitialState() {
    return { email: "", password: "" };
  },

  emailChange(evt){
    // evt.preventDefault();
    let val = evt.target.value;
    this.setState({email: val});
  },

  passwordChange(evt){
    evt.preventDefault();
    let val = evt.target.value;
    this.setState({password: val});
  },

  handleSubmit(evt){
    if(evt.keyCode === 13){
      evt.preventDefault();
      let data = {user: this.state};
      ClientActions.login(data);
    }
  },

  render(){

    let component = (
      <form className="login-form" onSubmit={this.handleSubmit} onKeyDown={this.handleSubmit}>
        <input className="login-input" id='login-email'
               type="text"
               placeholder="Email"
               value={this.state.email}
               onChange={this.emailChange} />
             <input className="login-input" id='login-pw'
               type="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.passwordChange} />
      </form>
    );

    if(this.state.hidden === true){
      component = (
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label className="login-label" onClick={this.toggleShow}>Log In:</label>
        </form>
      );
    }

    return(
      <div className="login-form-container">
        {component}
      </div>
    );
  }

});

module.exports = LoginForm;
