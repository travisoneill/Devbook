const React = require('react');
const FriendStore = require('../../../../stores/friend_store');
const PhotoStore = require('../../../../stores/friend_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');
const Transform = require('../../../../constants/transformations');
const Default =  require('../../../../constants/defaults');
const Link = require('react-router').Link;


//mutual friends pane on sidebar of timeline
const MutualFriends = React.createClass({

  getInitialState(){
    return { friends: [], count: 0};
  },

  componentDidMount(){
    this.listener = FriendStore.addListener(this._onChange);
    ClientActions.mutualFriends(this.props.user, CurrentUserStore.get());
  },

  componentWillReceiveProps(newProps){
    ClientActions.mutualFriends(newProps.user, CurrentUserStore.get());
  },

  _onChange(){
    this.setState({friends: FriendStore.all(), count: FriendStore.count()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){

    let title = "Mutual Friends";
    let count = this.state.count;
    if(this.props.user.id === CurrentUserStore.get().id){title = "Friends";}
    const index = this.state.friends.slice(0, 9).map( (friend) => {
      return <IndexItem key={friend.id} user={friend} />;
    });

    let i = 999999999999999;
    while(index.length < 9){
      index.push(<div className="mutual-friend-container" key={i} />);
      i++;
    }

    return(
      <div className="mutual-friends">
        <Link to={`friends/${this.props.user.id}`}>
          <img className='header-icon mf' src={Default.mf_icon}/>
          <h4 className='header mf'>{title} - {count}</h4>
        </Link>
        <div className="mutual-friends-index">
          <div className="mutual-friends-row">
            {index.slice(0,3)}
          </div>
          <div className="mutual-friends-row">
            {index.slice(3,6)}
          </div>
          <div className="mutual-friends-row">
            {index.slice(6,9)}
          </div>
        </div>
      </div>
    );
  }
});

//each photo in display is an IndexItem
//overlay div contains hover elements
const IndexItem = React.createClass({

  render(){
    const user = this.props.user;
    const name = user.full_name;
    const url = Transform.transformPic(user.profile_pic_url, 100, 100);

    return(
      <div className="mutual-friend-container">
        <Link className='mutual-friend-link' to={`timeline/${user.id}`}>
          <img className='mutual-friend-image' src={url} className="mutual-friend-image" />
          <div className="mutual-friend-overlay">
            <p className='mutual-friend-text'>{name}</p>
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = MutualFriends;
