module.exports = {

  profilePic(url){
    return this.transformPic(url, 168, 168);
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

  transformPic(url, w, h){
    const query = `/upload/w_${w},h_${h}`;
    return url.split('/upload').join(query);
  }

};
