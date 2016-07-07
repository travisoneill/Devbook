module.exports = {

  profilePic(url){
    return this.transformPic(url, 160, 160);
  },

  profilePic2(url){
    return this.transformPic(url, 40, 40);
  },

  profilePic3(url){
    return this.transformPic(url, 32, 32);
  },

  coverPhoto(url){
    return this.transformPic(url, 831, 317);
  },

  postPic(url){
    return this.transformPic(url, 476, 476);
  },

  photoWall(url){
    return this.transformPic(url, 261, 261);
  },

  transformPic(url, w, h){
    const query = `/upload/w_${w},h_${h},c_fill`;
    return url.split('/upload').join(query);
  }

};
