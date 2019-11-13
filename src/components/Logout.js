import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

//import { withRouter } from 'react-router-dom'


const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout() // onSubmit this function sends action.type from actions "clearCurrentUser" to reducer "currentUser" and returns NULL
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout } )(Logout)