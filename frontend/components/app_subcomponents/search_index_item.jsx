const React = require('react');
const Link = require('react-router').Link;
const Transform = require('../../constants/transformations');
const ServerActions = require('../../actions/server_actions');
const FriendButton = require('../util/add_friend');
const CurrentUserStore = require('../../stores/current_user_store');

//items in search dropdown
const SearchIndexItem = React.createClass({

  handleClick(e){
    ServerActions.clearSearch();
  },

  render(){
    const url = Transform.profilePic2(this.props.result.profile_pic_url);
    const name = this.props.result.full_name;
    const id = this.props.result.id;
    return(
      <div className="search-dropdown-item" >
        <Link to={`/timeline/${id}`}
              className="search-link"
              onClick={this.handleClick}>
          <img src={url} className="search-thumbnail" />
          <p className="search-name">{name}</p>
          <FriendButton current={CurrentUserStore.get()}
                        selected={this.props.result}
                        location={"search-friend-button"} />
        </Link>
      </div>
    );
  }
});

module.exports = SearchIndexItem;
