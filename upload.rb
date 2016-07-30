urls = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bombe-rebuild.jpg",
  'http://www.jamesjheaney.com/wp-content/uploads/2014/09/1730144429_285d37f77e_z.jpg',
  'http://www.cardozojurist.com/wordpress/wp-content/uploads/2016/01/Microsoft-New-York.jpg',
  'http://static.flickr.com/73/162075185_f0eb305c77_o.jpg',
  'https://timedotcom.files.wordpress.com/2014/09/google.jpg',
  'http://1.bp.blogspot.com/-qzVrPuJdeBE/U3uEufluKoI/AAAAAAAAAOY/BqubkfoNNTI/s1600/Picture1.png'
]

images = []

urls.each do |url|
  ul = Cloudinary::Uploader.upload(url, {api_key: 749961944695482, api_secret: 'TG7EBOqZMNpu4YiU0CBfOV1ov7s', cloud_name: 'devbook'})
  images << ul["secure_url"]
end

p images
