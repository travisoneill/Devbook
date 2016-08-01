const React = require('react');
const FriendStore = require('../../../../stores/friend_store');
const PhotoStore = require('../../../../stores/photo_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');
const Transform = require('../../../../constants/transformations');
const Default =  require('../../../../constants/defaults');
const Link = require('react-router').Link;

const IndexItem = React.createClass({

  render(){
    const photo = this.props.photo;
    const url = Transform.transformPic(photo.url, 100, 100);

    return(
      <div className="mutual-friend-container">
        <img src={url} className="mutual-friend-image" />
        <div className="mutual-friend-overlay">
        </div>
      </div>
    );
  }
});

const RecentPhotos = React.createClass({

  getInitialState(){
    return { photos: [] };
  },

  componentDidMount(){
    this.listener = PhotoStore.addListener(this._onChange);
    ClientActions.getAllPhotos(SelectedUserStore.get());
  },

  _onChange(){
    this.setState({ photos: PhotoStore.all() });
  },

  componentWillReceiveProps(newProps){
    ClientActions.getAllPhotos(SelectedUserStore.get());
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){

    let title = "Recent Photos:";

    const index = this.state.photos.slice(0, 9).map( (photo) => {
      return <IndexItem key={photo.id} photo={photo} />;
    });
    const id = (this.state.photos[0] || {}).user_id;

    return(
      <div className="mutual-friends">
        <Link className='mutual-friend-link' to={`photos/${id}`}>
          <img className='header-icon pm' src={Default.pm_icon}/>
          <h4 className='header rp'>{title}</h4>
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


module.exports = RecentPhotos;
