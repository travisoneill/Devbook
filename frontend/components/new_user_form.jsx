const React = require('react');
const ClientActions = require('../actions/client_actions');

const NewUserForm = React.createClass({

  fnameChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({fname: val});
  },

  lnameChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({lname: val});
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
    let data = this.state;
    ClientActions.createUser(data);
  },

  getInitialState: function() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
  },

  render(){
    return(
      <div>
        <h3>Create Account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input type="text" value={this.state.fname} onChange={this.fnameChange} /><br />
          <label>Last Name:</label>
          <input type="text" value={this.state.lname} onChange={this.lnameChange} /><br />
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.emailChange} /><br />
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.passwordChange} /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

});

module.exports = NewUserForm;
