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
        {<h3>{props.blog.attributes.title}</h3>}Short Summary
        {<p className="Education">{props.blog.attributes.content}</p>}
        {<a href={props.blog.attributes.blog_link}>Link to Blog page</a>} 
        <CommentsContainer blog={props.blog}/>
    </div>
  );
};

export default blogModal;

