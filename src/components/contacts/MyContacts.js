import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"

const MyContacts = ({ currentUser, loggedIn  }) => {
    return (
      loggedIn ?
      <div className="Modal">
     { <p> {currentUser.attributes.contacts.map(element => element.mail)}</p>}
     { <p> {currentUser.attributes.contacts.map(element => element.linkedin)}</p>}
     { <p> {currentUser.attributes.contacts.map(element => element.github)}</p>}
      </div> : null
    )
  }

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyContacts)