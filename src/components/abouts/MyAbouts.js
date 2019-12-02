import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyProjects = ({ currentUser, loggedIn  }) => {
  const cssClasses = [
    "Modal",
    "About"
  ];
  return (
    loggedIn ?
    <div className={cssClasses.join(' ')}>
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