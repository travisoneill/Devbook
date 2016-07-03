const React = require('react');


const TimelineIndexItem = React.createClass({


  render(){
    return(
      <div className="timeline-index-item">
        {this.props.post.body}
      </div>
    );
  }
});

module.exports = TimelineIndexItem;
