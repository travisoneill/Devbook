const React = require('react');
const ClientActions = require('../../actions/client_actions');

const SearchBar = React.createClass({

  getInitialState() {
    return { text: "" };
  },

  search(e){
    e.preventDefault();
    const val = e.target.value;
    if(val.length > 0){ClientActions.userSearch(val);}
    this.setState({text: val});
  },

  handleSubmit(e){
    e.preventDefault();
    const val = e.target.value;
    console.log("No functionality here yet!");
    this.setState({text: ""});
  },

  render(){
    return(
      <div className="search-bar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input className="search-input"
                type="search"
                placeholder="User Search"
                onChange={this.search}
                value={this.state.text}/>

        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
