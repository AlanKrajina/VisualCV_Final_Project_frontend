import React from 'react'
import { connect } from 'react-redux'

const MyProjects = ({ currentUser, loggedIn  }) => {
  return (
    loggedIn ?
    <div className="nav">
   { <p> {currentUser.attributes.abouts.map(element => element.content)}</p>}
    </div> : null
  )
  }



const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyProjects)