import React, { Component } from 'react';

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
    this.props.addComment({  // dispatches action to reducer
      text: this.state.text,
      blogId: this.props.blogId
    });
    this.setState({
      text:''
    });
  }

  render() {
    return (
      <div>
        Create a comment:
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type='text'
            value={this.state.text}
            onChange={event => this.handleOnChange(event)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default CommentInput;