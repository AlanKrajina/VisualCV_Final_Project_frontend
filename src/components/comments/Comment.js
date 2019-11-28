import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Comment extends Component {

  render() {
    const { comment, deleteComment } = this.props 

    return (
      <div>
        <li style={{marginTop: "20px", fontSize: "15px"}}>

          {comment.text} 
        </li>
          <Button style={{marginTop: "10px"}} onClick={() => deleteComment(comment.id)}> Delete </Button>

      </div>
    );
  }

};

export default Comment;