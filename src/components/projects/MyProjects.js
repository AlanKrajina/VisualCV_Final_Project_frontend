import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn }) => {

    return (
        loggedIn ?
        <div className="Modal">
            <p>List of Projects:</p>
            {currentUser.attributes.projects.map(element => 
              <div key={element.id}>
               <p><Link to={`/projects/${element.id}`}>{element.title}</Link></p>
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