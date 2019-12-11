import React from "react";
import "./Modal.css";

const projectModal = props => {                 
  const cssClasses = [
    "Modal",
    props.show ? "ModalClosed" : "ModalOpen"
  ];

  return (
    <div className={cssClasses.join(' ')}>
           {<h3>{props.project.title}</h3>}
           {<p className="Education">{props.project.content}</p>}
           {<a target="_blank" rel="noopener noreferrer" href={props.project.video_link}>Visit youtube link</a>}
           <span> or </span>
           {<a target="_blank" rel="noopener noreferrer" href={props.project.github}>Visit github link</a>} 
    </div>
  );
};

export default projectModal;
