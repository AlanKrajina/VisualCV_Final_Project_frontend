import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn  }) => {
  const cssClasses = [
    "Modal",
    "Education2"
  ];
  return (
    loggedIn ?
    <div className={cssClasses.join(' ')}>
        {currentUser.attributes.educations.map(element => 
          <div>
           <h4 className={"title"}>{element.school}</h4>
           <p>{element.location}</p>
           <p>{element.content}</p>
        </div>
        )} 
        <p className={"title"}>Certifications:</p>
        {currentUser.attributes.educations.map(element => 
          <div> 
           <h5 className={"title"}>{element.certification_name}</h5>
           <p>{element.certification_content}</p>
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