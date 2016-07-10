const React = require('react');
const FriendStore = require('../../../../stores/friend_store');
const PhotoStore = require('../../../../stores/photo_store');
const SelectedUserStore = require('../../../../stores/selected_user_store');
const CurrentUserStore = require('../../../../stores/current_user_store');
const ClientActions = require('../../../../actions/client_actions');
const Transform = require('../../../../constants/transformations');

const IndexItem = React.createClass({

  render(){
    const photo = this.props.photo;
    const url = Transform.transformPic(photo.url, 100, 100);

    return(
      <div className="recent-photo-container">
        <img src={url} className="recent-photo-image" />
        <div className="recent-photo-overlay">
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

    return(
      <div className="recent-photos">
        <h4>{title}</h4>
        <div className="recent-photos-index">
          {index}
        </div>
      </div>
    );
  }
});


module.exports = RecentPhotos;
