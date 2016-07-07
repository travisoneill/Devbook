const React = require('react');
const PhotoStore = require('../../../stores/photo_store');
const CurrentUserStore = require('../../../stores/current_user_store');
const PhotoIndexItem = require('./photo_index_item');
const ClientActions = require('../../../actions/client_actions');


const PhotoIndex = React.createClass({

  getInitialState(){
    return {photos: []};
  },

  componentDidMount(){
    const user = CurrentUserStore.get();
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
      <div className="photos-content">
        {index}
      </div>
    );
  }
});

module.exports = PhotoIndex;
