## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Titlebar
    * Searchbar
      * SearchDropdown
        * DropdownItem
  * RightSidebar
    * RequestIndex
      * RequestIndexItem
  * **UserPane**
    * LeftSidebar
      * RecentPhotosIndex
        * RecentPhotoItem
      * MutualFriendsIndex
        * MutualFriendItem
    * **Timeline**
      * NewPostForm
      * TimelineIndex
        * TimelinePost
          * NewCommentForm
    * **About**
      * UserAbout
    * **Friends**
      * FriendRequestIndex
        * FriendRequestIndexItem
      * FriendIndex
        * FriendIndexItem
    * **Photos**
      * PhotoWall
        * NewPhotoForm
        * PhotoWallItem

## Routes

* **component:** `App` **path:** `/`
  * **INDEX** `UserPane` - defaults to `/timeline`
  * **component:** `UserPane` **path:** `/user/(:userId)`
    * **component:** `Timeline` **path:** `/timeline`
    * **component:** `About` **path:** `/about`
    * **component:** `Friends` **path:** `/friends`
    * **component:** `Photos` **path:** `/photos`
