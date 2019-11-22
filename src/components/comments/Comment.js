import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { comment, deleteComment } = this.props 

    return (
      <div>
        <li>

          {comment.text} 
        </li>
          <button onClick={() => deleteComment(comment.id)}> Delete Comment </button>

      </div>
    );
  }

};

export default Comment;