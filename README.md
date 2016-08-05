# Devbook

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://devbookcapstone.herokuapp.com/

Devbook is a single page site built with React.js.  Users can create profiles and send & receive
friend requests.  Users can post on their own or their friends timelines and make comments on posts.  
The Ruby on Rails back end serves a single static page and all further content is delivered by AJAX
requests to the JSON API.  The database utilizes Postgres SQL with actions facilitated by the Active
Record ORM.  Images are hosted with Cloudinary.

## Features & Implementation

### Guest Log In

Just click the 'Guest Login' button on the splash page.

![demo_login](docs/Demo_login.png)

### Accounts & Authentication

Users can quickly create accounts or log in with the sign up and sign in forms on the
splash page.  Submit button will appear when form is filled out correctly.  

![sign_up](docs/sign_up.png)
![sign_in](docs/sign_in.png)

Authentication is handled on with Bcrypt on the back end and session tokens stored in
cookies on the users machines on the front end. The Gon gem is used to bootstrap user
data on window load.  User data is sanitized before transfer to the front end to protect
password hashes and session tokens.  Stored session tokens allow user to bypass Authentication
if already logged in and will be routed directly to their main timeline pages.

### Restful JSON API

Devbook is a single page site.  After the initial HTTP request, all additional content is
delivered via AJAX requests to 29 API endpoints following Restful protocol.  

```Ruby
POST   /api/users(.:format)                  api/users#create {:format=>:json}
GET    /api/users/:id(.:format)              api/users#show {:format=>:json}
PATCH  /api/users/:id(.:format)              api/users#update {:format=>:json}
PUT    /api/users/:id(.:format)              api/users#update {:format=>:json}
DELETE /api/users/:id(.:format)              api/users#destroy {:format=>:json}
GET    /api/posts(.:format)                  api/posts#index {:format=>:json}
POST   /api/posts(.:format)                  api/posts#create {:format=>:json}
PATCH  /api/posts/:id(.:format)              api/posts#update {:format=>:json}
PUT    /api/posts/:id(.:format)              api/posts#update {:format=>:json}
DELETE /api/posts/:id(.:format)              api/posts#destroy {:format=>:json}
POST   /api/requestings(.:format)            api/requestings#create {:format=>:json}
GET    /api/photos(.:format)                 api/photos#index {:format=>:json}
POST   /api/photos(.:format)                 api/photos#create {:format=>:json}
GET    /api/photos/:id(.:format)             api/photos#show {:format=>:json}
DELETE /api/photos/:id(.:format)             api/photos#destroy {:format=>:json}
POST   /api/comments(.:format)               api/comments#create {:format=>:json}
POST   /api/session(.:format)                api/sessions#create {:format=>:json}
GET    /api/session(.:format)                api/sessions#show {:format=>:json}
DELETE /api/session(.:format)                api/sessions#destroy {:format=>:json}
GET    /api/posts/timeline/:id(.:format)     api/posts#timeline {:format=>:json}
GET    /api/search/:query(.:format)          api/searchables#search {:format=>:json}
GET    /api/users/button/:id1/:id2(.:format) api/users#button {:format=>:json}
GET    /api/friends/:id(.:format)            api/users#friends {:format=>:json}
GET    /api/incoming/:id(.:format)           api/users#incoming {:format=>:json}
GET    /api/mutual/:id1/:id2(.:format)       api/users#mutual {:format=>:json}
GET    /api/relations/:id(.:format)          api/sessions#relation {:format=>:json}
DELETE /api/requestings/:id1/:id2(.:format)  api/requestings#destroy {:format=>:json}
POST   /api/friendships/:id1/:id2(.:format)  api/friendships#create {:format=>:json}
DELETE /api/friendships/:id1/:id2(.:format)  api/friendships#destroy {:format=>:json}
```

### Database

Database utilizes Postgres SQL.  Most database queries are handled using the association
function of the Active Record ORM.  Active Record 'eager_load' method is used to load multiple
layers of relational data simultaneously to minimize database reads.

```Ruby
#/app/models/user.rb
#pulls from the DB the most recent n posts made by the user and his friends and all
#associated comments with the user data needed to render all thumbnails, name displays
#and links.  'self.friends' must be done separately as User.friends returns an array rather
#than an Active Record Collection.   
def tl_posts(n)
  f_ids = self.friends.map(&:id) << self.id
  Post.eager_load(comments: :user).where(user_id: f_ids).order(created_at: :desc).limit(n)
end
```   

Complex queries that are not supported by Active Record use inline SQL:

```Ruby
#/app/models/user.rb
def friends

  id = self.id

  friends_query = <<-SQL

    SELECT u1.*
    FROM users AS u2
    JOIN friendships AS f
      ON u2.id = f.user_id2
    JOIN users AS u1
      ON u1.id = f.user_id1
    WHERE u2.id = #{id}

    UNION

    SELECT u2.*
    FROM users AS u1
    JOIN friendships AS f
      ON u1.id = f.user_id1
    JOIN users AS u2
      ON u2.id = f.user_id2
    WHERE u1.id = #{id};

  SQL

  User.find_by_sql(friends_query)

end

```

Photos are stored as url strings pointing to images hosted by Cloudinary.

### Image Hosting and Processing

User photo uploads are handled by the Cloudinary Widget. Click on the photo upload icon
whenever it appears (on hover for profile and cover photos) to upload an image.

![photo_upload](docs/photo_upload.png)

Image load time is dramatically reduced by utilizing the Cloudinary API for image processing.  
Photos are resized by via simple url parameters before being sent to the client for rendering,
minimizing bandwidth usage. Splicing of the urls is handled on the front end as follows:

```Javascript
transformPic(url, w, h, params){
  if(params === undefined){params = '';}
  const query = `/upload/w_${w},h_${h},c_fill${params}`;
  return url.split('/upload').join(query);
}
//commonly used thumbnail sizes are further automated to take a single
//argument of the url of the picture to be transformed.
profilePic(url){
  return this.transformPic(url, 250, 250);
}
//any additional Cloudinary API supported params can be added such as
//opacity and grayscale below.
friendWallBW(url){
  return this.transformPic(url, 152, 152, ",o_50,e_grayscale");
}
```
