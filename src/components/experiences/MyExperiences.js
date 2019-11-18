import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyProjects = ({ currentUser, loggedIn  }) => {
  return (
    loggedIn ?
    <div className="nav">

        {currentUser.attributes.experiences.map(element => 
          <div>
           <h4>{element.company}</h4>
           <p>{element.position}</p>
           <p>{element.content}</p>
        </div>
        )} </div> : null
  )
  }
// seedat i mapirat nested


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyProjects)