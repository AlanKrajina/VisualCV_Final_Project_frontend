import React, { Component } from 'react';
import { Form , Button } from 'react-bootstrap'

class CommentInput extends Component {
  state ={
    text:''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment({  
      text: this.state.text,
      blogId: this.props.blogId
    });
    this.setState({
      text:''
    });
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        Create a comment:
        <Form onSubmit={event => this.handleOnSubmit(event)}>
        <Form.Control
            style={{width: "60%", marginLeft: "20%"}}
            type='text'
            value={this.state.text}
            onChange={event => this.handleOnChange(event)} />
            <Button style={{marginTop: "20px"}}variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      </div>
    );
  }
};

export default CommentInput;