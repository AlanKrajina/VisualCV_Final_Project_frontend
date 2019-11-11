import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = () => {
    return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={undefined} name="username" type="text" onChange={undefined} />
      <input placeholder="password" value={undefined} name="password" type="text" onChange={undefined} />
      <input type="submit" value="Log In"/>
    </form>
    )
}

export default Login