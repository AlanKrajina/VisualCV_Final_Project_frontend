import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn  }) => {
  const cssClasses = [
    "Modal",
    "Exp"
  ];

  return (
    loggedIn ?
    <div className={cssClasses.join(' ')}>

        {currentUser.attributes.experiences.map(element => 
          <div key={element.company}>
           <h4 className={"title"}>{element.company}</h4>
           <p>{element.position}</p>
           <p>{element.content}</p>
        </div>
        )} </div> : null
  )
  }


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyProjects)