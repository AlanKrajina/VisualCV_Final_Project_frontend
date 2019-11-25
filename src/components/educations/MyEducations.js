import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn  }) => {
  return (
    loggedIn ?
    <div className="Modal">

        {currentUser.attributes.educations.map(element => 
          <div>
           <h4>{element.school}</h4>
           <p className="Education">{element.location}</p>
           <p className="Education">{element.content}</p>
        </div>
        )} 
        <p className="Certs3">Certifications:</p>
        {currentUser.attributes.educations.map(element => 
          <div> 
           <h5 className="Certs2">{element.certification_name}</h5>
           <p className="Certs">{element.certification_content}</p>
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