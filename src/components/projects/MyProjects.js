import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyProjects = ({ currentUser, loggedIn  }) => {
    return (
      <div className="nav">

       { loggedIn ? <><p>{currentUser.attributes.projects.map(element => element.title)}</p></> : null}
  
      </div>
    )
  }



const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyProjects)