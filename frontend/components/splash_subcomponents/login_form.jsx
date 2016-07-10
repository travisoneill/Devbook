const React = require('react');
const ClientActions = require('../../actions/client_actions');

const LoginForm = React.createClass({

  getInitialState() {
    return { email: "", password: "", hidden: true };
  },

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

  toggleShow(e){
    e.preventDefault();
    this.setState({hidden: !this.state.hidden});
  },

  render(){

    let component = (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label className="login-label" onClick={this.toggleShow}>Log In:</label><br/>
        <input className="login-input"
               type="text"
               placeholder="Email"
               value={this.state.email}
               onChange={this.emailChange} />
        <input className="login-input"
               type="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.passwordChange} /><br />
        <input className="login-submit" type="submit" value="Sign In" />
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
