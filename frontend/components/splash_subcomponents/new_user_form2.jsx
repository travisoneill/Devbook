const React = require('react');
const ClientActions = require('../../actions/client_actions');

const NewUserForm = React.createClass({

  getInitialState() {
    return { fname: "", lname: "", email: "", email2: "", password: "",
            match: true, DD: "", MM: "", YYYY: "", incomplete: true }
  },

  //checks for presence of fname/lname pw length and email match
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
  },

  passwordChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({password: val});
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
    debugger;
    let data = this.state;
    ClientActions.createUser(data);
  },

  prevent(e){e.preventDefault();},

  render(){
    let component = ( <div className='new-user-form-row'><div
      className={`splash-button submit`} id='submit'
      onClick={this.handleSubmit}>GO TO MY HOMEPAGE</div></div> );

    if(this.checkComplete()){component = <div/>;}

    return(
      <div className="new-user-form-container">
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <div className='new-user-form-row'>
            <input className="new-user-input fname"
              type="text"
              placeholder="First Name"
              value={this.state.fname}
              onChange={this.fnameChange} />
            <input className="new-user-input lname"
              type="text"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={this.lnameChange} />
          </div>
          <div className='new-user-form-row'>
            <input className="new-user-input email"
              type="text"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.emailChange} />
          </div>
          <div className='new-user-form-row'>
            <input className="new-user-input email"
              type="test"
              placeholder="Re-enter Email Address"
              onPaste={this.prevent}
              onDrop={this.prevent}
              value={this.state.email2}
              onChange={this.email2Change} />
          </div>
          <div className='new-user-form-row'>
            <input className="new-user-input pw"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passwordChange} />
            <input className="new-user-input mm"
              id="MM"
              type="number"
              placeholder="MM"
              maxLength="2" min="1" max="12"
              value={this.state.month}
              onChange={this.monthChange} /><span className='slash'>/</span>
            <input className="new-user-input dd"
              id="DD"
              type="number"
              placeholder="DD"
              maxLength="2" min="1" max="31"
              value={this.state.day}
              onChange={this.dayChange} /><span className='slash'>/</span>
            <input className="new-user-input yyyy"
              type="number"
              id="YYYY"
              placeholder="YYYY"
              maxLength="4" max={new Date().getFullYear()}
              value={this.state.year}
              onChange={this.yearChange} />
            </div>
              {component}
          </form>
      </div>
    );
  }
});

module.exports = NewUserForm;
