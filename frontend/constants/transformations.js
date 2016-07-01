module.exports = {

  profilePic(url){
    return this.transformPic(url, 168, 168);
  },

  transformPic(url, w, h){
    const query = `/upload/w_${w},h_${h}`;
    return url.split('/upload').join(query);
  }

};
