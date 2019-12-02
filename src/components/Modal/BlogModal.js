import React from "react";
import "./Modal.css";
import CommentsContainer from '../CommentsContainer/CommentsContainer'

const blogModal = props => {                 
  const cssClasses = [
    "Modal",
    props.show ? "ModalClosed" : "ModalOpen"
  ];

  return (
    <div className={cssClasses.join(' ')}>
        {<h3>{props.blog.attributes.title}</h3>}
        {<p className="Education">{props.blog.attributes.content}</p>}
        {<a href={props.blog.attributes.blog_link}>Blog link</a>} 
        <CommentsContainer blog={props.blog}/>
    </div>
  );
};

export default blogModal;

