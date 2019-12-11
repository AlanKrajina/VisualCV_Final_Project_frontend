import React from "react";
import "./Modal.css";
import CommentsContainer from '../CommentsContainer/CommentsContainer'

const blogModal = props => {                 
  const cssClasses = [
    "Modal",
    props.show ? "ModalClosed" : "ModalOpen",
    "BlogModal"
  ];

  return (
    <div className={cssClasses.join(' ')}>
        {<h3>{props.blog.attributes.title}</h3>}
        {<a target="_blank" rel="noopener noreferrer" href={props.blog.attributes.blog_link}>Link to Blog post</a>} 
        <p>Short Summary</p>
        {<p className="Education">{props.blog.attributes.content}</p>}
        <CommentsContainer blog={props.blog}/>
    </div>
  );
};

export default blogModal;

