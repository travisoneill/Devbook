
module.exports = {

  createUser(data, serverAction){
    $.ajax({
      url: `api/users`,
      type: `POST`,
      dataType: `json`,
      data: {user:
            {fname: data.fname,
            lname: data.lname,
            email: data.email,
            password: data.password }},
      success(resp){
        serverAction(resp);
      }
    });
  },

  updateUser(data, serverAction){
    $.ajax({
      url: `api/users/${data.id}`,
      type: `PATCH`,
      dataType: `json`,
      data: { user: data },
      success(resp){
        serverAction(resp);
      }
    });
  },

  getUser(id, serverAction){
    $.ajax({
      url: `api/users/${id}`,
      type: `GET`,
      dataType: `json`,
      data: '',
      success(resp){
        serverAction(resp);
      }
    });
  },

  deleteUser(id, serverAction){
    $.ajax({
      url: `api/users/${id}`,
      type: `DELETE`,
      dataType: `json`,
      data: '',
      success(resp){
        serverAction(resp);
      }
    });
  },

  logout(serverAction){
    $.ajax({
      url: `api/session`,
      type: `DELETE`,
      dataType: `json`,
      data: '',
      success(){
        serverAction();
      }
    });
  },

  login(data, serverAction){
    $.ajax({
      url: `api/session`,
      type: `POST`,
      dataType: `json`,
      data: data,
      success(resp){
        serverAction(resp);
      }
    });
  },

  createPost(data, serverAction){
    $.ajax({
      url: `api/posts`,
      type: `POST`,
      dataType: `json`,
      data: {post: data},
      success(resp){
        serverAction(resp);
      }
    });
  },

  getTimeline(id, serverAction){
    $.ajax({
      url: `api/posts/timeline/${id}`,
      type: `GET`,
      dataType: `json`,
      data: "",
      success(resp){
        serverAction(resp);
      }
    });
  },

  userSearch(query, serverAction){
    // debugger;
    $.ajax({
      url: `api/search/${query}`,
      type: `GET`,
      dataType: `json`,
      data: "",
      success(resp){
        serverAction(resp);
      }
    });
  },

  buttonState(current, selected, action){
    $.ajax({
      url: `api/users/button/${current.id}/${selected.id}`,
      type: `GET`,
      dataType: `json`,
      data: "",
      success(resp){
        action(resp);
      }
    });
  },

  sendRequest(data, action){
    $.ajax({
      url: `api/requestings`,
      type: `POST`,
      dataType: `json`,
      data: data,
      success(resp){
        action();
      }
    });
  },

  withdrawRequest(initiator, target, action){
    $.ajax({
      url: `api/requestings/${initiator}/${target}`,
      type: `DELETE`,
      dataType: `json`,
      data: '',
      success(resp){
        action();
      }
    });
  },

  acceptRequest(initiator, target, action){
    $.ajax({
      url: `api/friendships/${initiator}/${target}`,
      type: `POST`,
      dataType: `json`,
      data: '',
      success(resp){
        action();
      }
    });
  },

  unfriend(initiator, target, action){
    $.ajax({
      url: `api/friendships/${initiator}/${target}`,
      type: `DELETE`,
      dataType: `json`,
      data: '',
      success(resp){
        action();
      }
    });
  },

  addPhoto(photo, serverAction){
    $.ajax({
      url: `api/photos`,
      type: `POST`,
      dataType: `json`,
      data: photo,
      success(resp){
        serverAction(resp);
      }
    });
  },

  deletePhoto(id, serverAction){
    $.ajax({
      url: `api/photos/${id}`,
      type: `DELETE`,
      dataType: `json`,
      data: '',
      success(resp){
        serverAction(resp);
      }
    });
  },



  getAllPhotos(user, serverAction){
    $.ajax({
      url: `api/photos/${user.id}`,
      type: `GET`,
      dataType: `json`,
      data: '',
      success(resp){
        console.log(resp);
        serverAction(resp);
      }
    });
  },

  getAllFriends(user, serverAction){
    $.ajax({
      url: `api/friends/${user.id}`,
      type: `GET`,
      dataType: `json`,
      data: '',
      success(resp){
        // console.log(resp);
        serverAction(resp);
      }
    });
  },

  getAllIncoming(user, serverAction){
    $.ajax({
      url: `api/incoming/${user.id}`,
      type: `GET`,
      dataType: `json`,
      data: '',
      success(resp){
        // console.log(resp);
        serverAction(resp);
      }
    });
  },

  getMutualFriends(user1, user2, serverAction){
    $.ajax({
      url: `api/mutual/${user1.id}/${user2.id}`,
      type: `GET`,
      dataType: `json`,
      data: '',
      success(resp){
        console.log(resp);
        serverAction(resp);
      }
    });
  }


};
