# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
full_name       | string    | not null
session_token   | string    | not null, indexed, unique
pw_digest       | string    | not null
profile_pic_url | string    |
cover_pic_url   | string    |
OTHER_STUFF     |           |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
text        | text      | not null
url         | string    |
photo       | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references notes), indexed
text        | text      | not null

## requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
initiator_id| integer   | not null, foreign key (references users), indexed
target_id   | string    | not null, foreign key (references users), indexed

## requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id1    | integer   | not null, foreign key (references users), indexed
user_id2    | integer   | not null, foreign key (references users), indexed

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    |
user_id     | integer   | not null, foreign key, indexed
post_id     | integer   | foreign key, indexed
image_url   | string    | not null
