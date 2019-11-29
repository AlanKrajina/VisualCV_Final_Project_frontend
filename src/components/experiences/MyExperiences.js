import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn  }) => {
  return (
    loggedIn ?
    <div className="Modal">

        {currentUser.attributes.experiences.map(element => 
          <div>
           <h4>{element.company}</h4>
           <p className="Education">{element.position}</p>
           <p className="Education">{element.content}</p>
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