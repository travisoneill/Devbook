# FBClone

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Description Here: 

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] Adequate CSS styling
- [ ] User profiles
  - [ ] Users can create update and delete
  - [ ] Users can upload profile pictures
- [ ] Friending
  - [ ] Users can send and recieve friend requests
  - [ ] Users can accept or reject friend requests
  - [ ] Users can see and search a list of their friends
  - [ ] Users can see friend in common with other users
- [ ] Posts
  - [ ] Users can post to their own wall
  - [ ] Users can post to their friends' walls
  - [ ] Users can add links and photos to their posts
  - [ ] Users can edit and delete there own posts
- [ ] Wall
  - [ ] Users can see only their friends posts on their wall
  - [ ] Users can see a wall of a single friend's posts in their friends profile page
  - [ ] Users can comment only on their own posts and friends' posts
- [ ] News Feed
  - [ ] Users can see all of their friends' recent activity on their homepage
- [ ] Authentication

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin components on splash page
- [ ] blank landing page after signin

### Phase 2A: Post and User Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Posts and Users backend.  Users can create, update, and destroy posts. Users can Create, update and delete profiles

- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts and users (`PostsController`, `Users Controller`)
- [ ] React component for posts (WallPostIndexItem & TimelinePostIndexItem)
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- 
### Phase 2B: Friends Functionality (1.5 days, W1 Th 12pm)

**Objective:** Users can add friends

- [ ] create `Friendings` model and controller
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for friendings join table (`FriendingsController`)

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `WallPostIndex`
  - [ ] `TimelinePostIndex`
  - [ ] `NewPostForm`

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Title Bar and Newsfeed (1 day, W2 Tu 12pm)

**Objective:** Create titlebar and newsfeed

- [ ] create `titlebar component` and `newsfeed component`
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views


### Phase 6: Comments (1 days, W2 Th 12pm)

**Objective:** Users cn comment on their own and friends posts.

- [ ] create `Comment` model and controller
- build out API, Flux loop, and components for:
  - [ ] fetching relevant comments for wall
  - [ ] comments store
  - [ ] NewCommentForm component
  - [ ] CommentShow component

### Phase 7: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Awesome Splash Page
- [ ] Notifications
- [ ] Infinite Scroll
- [ ] Likes
- [ ] Search
- [ ] Photo Albums
- [ ] Chat / Messaging
- [ ] Customizeable Permissions
- [ ] Nested Comments

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
