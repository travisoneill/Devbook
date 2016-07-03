const React = require('react');
const ClientActions = require('../../../actions/client_actions');
const NewPostForm = require('./new_post_form');

const ProfileContent = React.createClass({
  render(){
    return(
      <div className="profile-content">
        <NewPostForm />
        <h4>Timeline</h4>
      </div>
    );
  }
});

module.exports = ProfileContent;
