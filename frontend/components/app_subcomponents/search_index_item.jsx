const React = require('react');
const Link = require('react-router').Link;
const Transform = require('../../constants/transformations');
const ClientActions = require('../../actions/client_actions');

const SearchIndexItem = React.createClass({
  render(){
    const url = Transform.profilePic2(this.props.result.profile_pic_url);
    const name = this.props.result.full_name;
    const id = this.props.result.id;
    return(
      <li className="search-dropdown-item" >
        <Link to={`/timeline/${id}`}
              className="search-link">
          <img src={url} className="search-thumbnail" />
          <p className="search-name">{name}</p>
        </Link>
      </li>
    );
  }
});

module.exports = SearchIndexItem;
