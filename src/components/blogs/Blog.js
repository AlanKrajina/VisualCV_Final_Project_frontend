import React, { Component } from "react";
import "./Blog.css";
import Modal from "../Modal/Modal.js";


class Blog extends Component {
  state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        {<h3>{this.props.blog.attributes.title}</h3>}
        {<p>{this.props.blog.attributes.content}</p>}
        {<p>{this.props.blog.attributes.comments.map(comment => comment.text)}</p>}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        <button className="Button" onClick={this.showModal}>Create a Comment</button>
      </div>
    );
  }
}

export default Blog;