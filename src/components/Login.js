import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = (props) => {
    return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={props.username} name="username" type="text" onChange={undefined} />
      <input placeholder="password" value={props.password} name="password" type="text" onChange={undefined} />
      <input type="submit" value="Log In"/>
    </form>
    )
}

const mapStateToProps = state => { // taking state from REDUX thats ALREADY in the store
    return {
      username: state.loginForm.username,
      password: state.loginForm.password
    }
  }

export default connect(mapStateToProps)(Login)
// connect to redux
// second argument -> 

/* mapStateToProps // taking state from REDUX 

loginForm
username(pin):""
password(pin):"" */