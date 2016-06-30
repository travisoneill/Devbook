const React = require('react');
const ClientActions = require('../actions/client_actions');

const LoginForm = React.createClass({

  emailChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({email: val});
  },

  passwordChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({password: val});
  },

  handleSubmit(e){
    e.preventDefault();
    let data = {user: this.state};
    ClientActions.login(data);
  },

  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  render(){
    return(
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="login-input"
                 type="text"
                 placeholder="Email"
                 value={this.state.email}
                 onChange={this.emailChange} />
          <input className="login-input"
                 type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.passwordChange} />
          <input className="myButton" type="submit" value="Sign In!" />
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
