const React = require('react');
const ClientActions = require('../../actions/client_actions');
const SearchStore = require('../../stores/search_store');
const SearchIndexItem = require('./search_index_item');

//handles sendin search qureries to the back end.  Probably should add debounce
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
    this.setState({text: ""});
  },

  render(){
    let dropdown = this.state.results.map( (result) => {
      return <SearchIndexItem key={result.id} result={result} />;
    });
    let component = <Dropdown results={dropdown} />;
    if(dropdown.length < 1){ component = <div/> }
    return(
      <div className="search-bar" id='search-bar'>
        <form className="search-form" id='search-bar' onSubmit={this.handleSubmit}>
          <input className="search-input" id='search-bar'
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

//dropdown menu that appears on serch entry
const Dropdown = React.createClass({

  //removes search dropdown on click on rest of page
  handleClick(evt){
    if(evt.target.id !== 'search-bar'){
      evt.preventDefault();
      ClientActions.clearSearch();
    }
  },

  componentDidMount(){
    document.addEventListener('click', this.handleClick, false);
  },

  componentWillUnmount(){
    document.removeEventListener('click', this.handleClick, false);
  },

  render(){
    return(
      <div className="search-dropdown">
        {this.props.results}
      </div>
    );
  }
});

module.exports = SearchBar;
