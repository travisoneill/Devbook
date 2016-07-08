const React = require('react');
const PhotoStore = require('../../../stores/photo_store');
const SelectedUserStore = require('../../../stores/selected_user_store');
const PhotoIndexItem = require('./photo_index_item');
const ClientActions = require('../../../actions/client_actions');
const PhotoUploadButton = require('../../util/upload_button');
const Defaults = require('../../../constants/defaults');

const PhotoIndex = React.createClass({

  getInitialState(){
    return { photos: [] };
  },

  componentDidMount() {
    const user = SelectedUserStore.get();
    this.listener = PhotoStore.addListener(this._onChange);
    ClientActions.getAllPhotos(user);
  },

  _onChange(){
    this.setState({photos: PhotoStore.all()});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    const index = this.state.photos.map( (photo) => {
      return <PhotoIndexItem key={photo.id} photo={photo} />;
    });
    return(
      <div className="photo-index">
        <div className="photo-container first">
          <p className="photo-overlay">Add New Photo</p>
          <img src={Defaults.photo_wall} />
          <PhotoUploadButton location={"wall"} />
        </div>
        {index}
      </div>
    );
  }
});

module.exports = PhotoIndex;
