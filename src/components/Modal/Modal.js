import React from "react";
import { connect } from 'react-redux'

import "./Modal.css";

const modal = props => {                 
  const cssClasses = [
    "Modal",
    props.show ? "ModalOpen" : "ModalClosed"
  ];

  return (
    <div className={cssClasses.join(' ')}>
      <h1>Comment:</h1>
      <p>input field</p>
      <button className="Button">   
        Submit Button
      </button>
      <button className="Button" onClick={props.closed}>   
        Dismiss
      </button>
    </div>
  );
};


export default modal;
