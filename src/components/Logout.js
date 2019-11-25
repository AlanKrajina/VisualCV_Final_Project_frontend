import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'
import { Form , Button } from 'react-bootstrap'


const Logout = ({ logout, history }) => {
  return (
    <Form onSubmit={(event) => {
        event.preventDefault()
        logout() // onSubmit this function dispatches action.type from actions "clearCurrentUser" to reducer "currentUser" and returns NULL
        history.push('/')
      }
    }>
    <Button variant="primary" type="submit">
      Log Out
    </Button>
    </Form>
  )
}

export default withRouter(connect(null, { logout } )(Logout))
// { logout }  -> instead of dispatchToProps
// imported action from "../actions/currentUser.js"
// automatically dispatched and now we can use it
