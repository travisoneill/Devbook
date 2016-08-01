const React = require('react');
const ClientActions = require('../../actions/client_actions');
const SearchStore = require('../../stores/search_store');
const SearchIndexItem = require('./search_index_item');

const SearchBar = React.createClass({

  getInitialState() {
    return { text: "", results: [] };
  },

  componentDidMount(){
    this.listener = SearchStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({results: SearchStore.all()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  search(e){
    e.preventDefault();
    const val = e.target.value;
    if(val.length > 0) {ClientActions.userSearch(val);}
    else {ClientActions.clearSearch();}
    this.setState({text: val});
  },

  handleSubmit(e){
    e.preventDefault();
    const val = e.target.value;
    console.log("No functionality here yet!");
    this.setState({text: ""});
  },

  render(){
    let dropdown = this.state.results.map( (result) => {
      return <SearchIndexItem key={result.id} result={result} />;
    });
    let component = (<div className="search-dropdown">
      <ul className="search-list">{dropdown}</ul>
    </div>);
    if(dropdown.length < 1){ component = <div/> }
    return(
      <div className="search-bar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input className="search-input"
                type="search"
                placeholder="User Search"
                onChange={this.search}
                value={this.state.text}/>

        </form>
        {component}
      </div>
    );
  }
});

module.exports = SearchBar;
