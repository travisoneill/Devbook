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
      <div className="new-user-form-container">
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <label>Sign Up</label>
          <input className="new-user-input"
                 type="text"
                 placeholder="First Name"
                 value={this.state.fname}
                 onChange={this.fnameChange} />
          <input className="new-user-input"
                 type="text"
                 placeholder="Last Name"
                 value={this.state.lname}
                 onChange={this.lnameChange} /><br />
          <input className="new-user-input"
                 type="text"
                 placeholder="email"
                 value={this.state.email}
                 onChange={this.emailChange} /><br />
          <input className="new-user-input"
                 type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.passwordChange} /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

});

module.exports = NewUserForm;
