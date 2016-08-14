const React = require('react');
const PhotoStore = require('../../../stores/photo_store');
const SelectedUserStore = require('../../../stores/selected_user_store');
const CurrentUserStore = require('../../../stores/current_user_store');
const PhotoIndexItem = require('./photo_index_item');
const ClientActions = require('../../../actions/client_actions');
const PhotoUploadButton = require('../../util/upload_button');
const Defaults = require('../../../constants/defaults');

//photo wall shown when on 'photos' tab
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
    //photo upload is default first item on photo wall
    let component = (<div key={888888888888888} className="photo-container first">
      <p className="photo-overlay">Add New Photo</p>
      <img className='photo-wall-item' src={Defaults.photo_wall} />
      <PhotoUploadButton location={"wall"} />
    </div>);
    //displays upload component only on own photo wall
    if(CurrentUserStore.get().id === SelectedUserStore.get().id){
      index.unshift(component);
    }

    let n = (3 - index.length % 3) % 3;
    for (let i = 0; i < n; i++){index.push(<div key={9999999999999999} className='photo-container'/>);}

    let arr1 = index.filter( (el, idx) => idx % 3 === 0);
    let arr2 = index.filter( (el, idx) => idx % 3 === 1);
    let arr3 = index.filter( (el, idx) => idx % 3 === 2);

    return(
      <div className="photo-index">
        <div className='photo-column'>
          {arr1}
        </div>
        <div className='photo-column'>
          {arr2}
        </div>
        <div className='photo-column'>
          {arr3}
        </div>
      </div>
    );
  }
});

module.exports = PhotoIndex;
