module.exports = {
  //automates requests to the cloudinary API by splicing correct params
  //into URL.  w = desired width in pixels, h = desired height
  transformPic(url, w, h, params){
    if(params === undefined){params = '';}
    const query = `/upload/w_${w},h_${h},c_fill${params}`;
    return url.split('/upload').join(query);
  },
  //commonly used thumbnail sizes are further automated to take a single
  //argument of the url of the picture to be transformed
  profilePic(url){
    return this.transformPic(url, 250, 250);
  },

  //any additional Cloudinary API supported params can be added such as
  //opacity and grayscale below.
  friendWallBW(url){
    return this.transformPic(url, 152, 152, ",o_50,e_grayscale");
  },

  profilePic2(url){
    return this.transformPic(url, 70, 70);
  },

  profilePic3(url){
    return this.transformPic(url, 70, 70);
  },

  coverPhoto(url){
    return this.transformPic(url, 831, 317);
  },

  postPic(url){
    return this.transformPic(url, 700, 700);
  },

  photoWall(url){
    return this.transformPic(url, 261, 261);
  },

  friendWall(url){
    return this.transformPic(url, 152, 152);
  },


  titlebarLogo(url){
    return this.transformPic(url, 25, 25);
  },

  splashLogo(url){
    return this.transformPic(url, 400, 60);
  }


};
