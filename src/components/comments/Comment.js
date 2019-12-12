import { Button } from 'react-bootstrap'
import React from 'react'

const Comment = (props) => {

  return (
    <div style={{marginTop: "20px", fontSize: "13px"}}>
        <p>{props.comment.attributes.text}</p> 
        <Button style={{padding: "2px", fontSize: "11px"}} onClick={() => props.deleteComment(props.comment.id)}> Delete </Button>
    </div>
  );
}

export default Comment;
