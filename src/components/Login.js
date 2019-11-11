import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"




const Login = ({ loginFormData, updateLoginForm}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
              [name]: value
        }
        updateLoginForm(updatedFormInfo)
      }


    return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input type="submit" value="Log In"/>
    </form>
    )
}







const mapStateToProps = state => { // taking state from REDUX thats ALREADY in the store
    return {
   //   username: state.loginForm.username,
   //   password: state.loginForm.password
   loginFormData: state.loginForm
}
  }

export default connect(mapStateToProps, { updateLoginForm })(Login)
// connect to redux
// second argument -> imported action





/* mapStateToProps // taking state from REDUX 

loginForm
username(pin):""
password(pin):"" */