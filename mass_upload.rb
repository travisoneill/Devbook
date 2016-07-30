urls = ["YOUR URLS HERE"]

images = []

urls.each do |url|
  ul = Cloudinary::Uploader.upload(url, {api_key: YOUR KEY (INT), api_secret: YOUR KEY (STR), cloud_name: YOUR CLOUD NAME (STR)})
  images << ul["secure_url"]
end

p images
