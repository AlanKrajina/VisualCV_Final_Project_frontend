import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

  render() {
    const associatedComments = this.props.comments.filter(
      comment => comment.blogId === this.props.blogId
    );

    const renderComments = associatedComments.map((r) => {return <Comment key={r.id} comment={r} deleteComment={this.props.deleteComment}/>})

    return (
      <div>{renderComments}</div>
    );
  }
};



  export default Comments;
