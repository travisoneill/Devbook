const React = require('react');
const ClientActions = require('../../actions/client_actions');

const LoginForm = React.createClass({

  getInitialState() {
    return { email: "", password: "", hidden: false };
  },

  emailChange(evt){
    evt.preventDefault();
    const val = evt.target.value;
    this.setState({email: val});
  },

  passwordChange(e){
    evt.preventDefault();
    const val = evt.target.value;
    this.setState({password: val});
  },

  handleSubmit(evt){
    evt.preventDefault();
  }

  render(){
    let component = (
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
