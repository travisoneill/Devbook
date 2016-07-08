const React = require('react');
const ClientActions = require('../../actions/client_actions');

const NewUserForm = React.createClass({

  getInitialState() {
    return { fname: "", lname: "", email: "", email2: "", password: "",
            match: true, DD: "", MM: "", YYYY: "", incomplete: true};
  },

  checkComplete(){
    let incomplete = false;
    if(this.state.fname.length < 1){incomplete = true;}
    if(this.state.lname.length < 1){incomplete = true;}
    if(this.state.email.length < 1){incomplete = true;}
    if(this.state.email2.length < 1){incomplete = true;}
    if(this.state.password.length < 6){incomplete = true;}
    if(this.state.match === false){incomplete = true;}
    return incomplete;
  },

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
    let match = this.state.email2 === val;
    this.setState({email: val, match: match});
  },

  email2Change(e){
    e.preventDefault();
    let val = e.target.value;
    let match = this.state.email === val;
    this.setState({email2: val, match: match});
    // let incomplete = this.checkComplete();
    // this.setState({incomplete: incomplete});
  },

  passwordChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({password: val});
    // let incomplete = this.checkComplete();
    // this.setState({incomplete: incomplete});
  },

  monthChange(e){
    e.preventDefault();
    let val = e.target.value;
    let next = document.getElementById('DD');
    if(val.length === 2){next.focus();}
    this.setState({MM: val});
  },

  dayChange(e){
    e.preventDefault();
    let val = e.target.value;
    let next = document.getElementById('YYYY');
    if(val.length === 2){next.focus();}
    this.setState({DD: val});
  },

  yearChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({YYYY: val});
  },


  handleSubmit(e){
    e.preventDefault();
    let data = this.state;
    ClientActions.createUser(data);
  },

  prevent(e){e.preventDefault();},


  render(){
    return(
      <div className="new-user-form-container">
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <label className="new-user-label" >{"new User({"} </label><br />
          <input className="new-user-input"
                 type="text"
                 placeholder="First Name"
                 value={this.state.fname}
                 onChange={this.fnameChange} />
          <input className="new-user-input"
                 type="text"
                 placeholder="Last Name"
                 value={this.state.lname}
                 onChange={this.lnameChange} />
          <input className="new-user-input long"
                 type="text"
                 placeholder="Email Address"
                 value={this.state.email}
                 onChange={this.emailChange} /><br />
          <input className="new-user-input long"
                 type="test"
                 placeholder="Re-enter Email Address"
                 onPaste={this.prevent}
                 onDrop={this.prevent}
                 value={this.state.email2}
                 onChange={this.email2Change} /><br />
          <input className="new-user-input long"
                 type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.passwordChange} /><br />
          <input className="new-user-input vshort"
                 id="MM"
                 type="number"
                 placeholder="MM"
                 maxlength="2" min="1" max="12"
                 value={this.state.month}
                 onChange={this.monthChange} />/
          <input className="new-user-input vshort"
                 id="DD"
                 type="number"
                 placeholder="DD"
                 maxlength="2" min="1" max="31"
                 value={this.state.day}
                 onChange={this.dayChange} />/
          <input className="new-user-input short"
                 type="number"
                 id="YYYY"
                 placeholder="YYYY"
                 maxlength="4" max={new Date().getFullYear()}
                 value={this.state.year}
                 onChange={this.yearChange} />
          <label>Human: </label>
          <input type="radio" className="new-user-input" name="species" value="human" />
          <label>Machine: </label>
          <input type="radio" className="new-user-input" name="species" value="human" /><br />
          <input className="signup-submit" disabled={this.checkComplete()} type="submit" value="Sign Up!" /><br/>
          <label>)};</label>
        </form>
      </div>
    );
  }
});

module.exports = NewUserForm;
