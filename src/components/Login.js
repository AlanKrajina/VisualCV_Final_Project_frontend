import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      name,
      value
    }
    updateLoginForm(updatedFormInfo)
  }



const Login = ({ username, password, updateLoginForm}) => {
    return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={password} name="password" type="text" onChange={handleInputChange} />
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

export default connect(mapStateToProps, {updateLoginForm: updateLoginForm})(Login)
// connect to redux
// second argument -> imported action





/* mapStateToProps // taking state from REDUX 

loginForm
username(pin):""
password(pin):"" */