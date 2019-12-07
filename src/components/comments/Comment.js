import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Comment extends Component {

  render() {
    const { comment, deleteComment } = this.props 
    return (
      <div style={{marginTop: "20px", fontSize: "13px"}}>
          <p>{comment.attributes.text}</p> 
          <Button style={{padding: "2px", fontSize: "11px"}} onClick={() => deleteComment(comment.id)}> Delete </Button>
      </div>
    );
  }
};

export default Comment;