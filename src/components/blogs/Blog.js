import React, { Component } from "react";
import "./Blog.css";
import CommentsContainer from '../../CommentsContainer/CommentsContainer'

class Blog extends Component {

  render() {
    return (
      <div className="App">
        {<h3>{this.props.blog.attributes.title}</h3>}
        {<p>{this.props.blog.attributes.content}</p>}
        <CommentsContainer blog={this.props.blog}/>
      </div>
    );
  }
}

export default Blog;

