import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'


const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout() // onSubmit this function dispatches action.type from actions "clearCurrentUser" to reducer "currentUser" and returns NULL
        history.push('/')
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, { logout } )(Logout))
// { logout }  -> instead of dispatchToProps
// imported action from "../actions/currentUser.js"
// automatically dispatched and now we can use it
