# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Post Cycles

### Posts API Request Actions

* `fetchWall`
  0. invoked from `Wall` `componentDidMount`
  0. `GET /api/posts/wall/:userId` is called.
  0. `storeWall` is set as the callback.

* `fetchTimeline`
  0. invoked from `Timeline` `component`
  0. `GET /api/posts/timeline/:userId` is called.
  0. `storeTimeline` is set as the callback.

* `createPost`
  0. invoked from new post form `onSubmit`
  0. `POST /api/posts` is called.
  0. `storePost` is set as the callback.
  0. `WallStore` and or `TimelineStore` is updated and emits change  

* `deletePost`
  0. invoked from `Timeline/wall` button `onClick`
  0. `DELETE /api/posts/:postId` is called.
  0. `receiveSingleNote` is set as the callback.

### Store Listeners

  * `Timeline Post Index` component listens to `Timeline` store.

## User Cycles

### Users API Response Actions

* `createUser`
  0. invoked from new user form on `splash`.
  0. `POST /api/users` is called.

* `getUser`
  0. invoked from link to user profile.
  0. `GET /api/users/:userId` is called.
  0. `storeUser` passed in as callback.

* `editUser`
  0. invoked from current user profile.
  0. `PATCH /api/users/:userId` is called.  

* `deleteUser`
  0. invoked from `delete account` button on user profile.
  0. `DELETE /api/users/:userId` is called.

## Friends & Request Cycles

### Friends API Response Actions

* `fetchFriends`
  0. invoked from `friends` store on `componentDidMount`
  0. `GET /api/friends/:userId` is called.
  0. `storeFriends` is set as the callback.

* `createFriend`
  0. invoked from `accept request` button `onClick`
  0. `POST /api/friends` is called.
  0. `storeFriend` is set as the callback
  0. `deleteRequest` is called

* `deleteFriend`
  0. invoked from `unfriend` button `onClick`
  0. `DELETE /api/friends` is called.
  0. `removeFriend` is set as the callback  

### Store Listeners

* `Friend Index` component listens to `Friends` store.  

### Request API Response Actions

* `fetchRequests`
  0. invoked from `requests` store on `componentDidMount`
  0. `GET /api/requests/:userId` is called.
  0. `storeRequests` is set as the callback.

* `createRequest`
  0. invoked from `add friend` button `onClick`
  0. `POST /api/requests` is called.
  0. `storeRequest` is set as the callback

* `deleteRequest`
  0. invoked from `ignore request` button `onClick`
  0. invoked from `accept request` button `onClick`
  0. `DELETE /api/requests` is called.
  0. `removeRequest` is set as the callback

### Store Listeners

* `Request Index` component listens to `Requests` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/users/search` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.


### Photos API Response Actions  

* `fetchPhotos`
* `createPhoto`
* `deletePhoto`
* `getPhoto`
