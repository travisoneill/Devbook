
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

};
