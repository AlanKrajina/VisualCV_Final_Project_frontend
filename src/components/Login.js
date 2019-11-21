import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"




const Login = ({ loginFormData, updateLoginForm, login , history}) => {



    const handleInputChange = event => {
        const { name, value } = event.target // dinamically grabs name and value (onChange)
        const updatedFormInfo = {
            ...loginFormData,
              [name]: value
        }
        updateLoginForm(updatedFormInfo) // sends current state(updatedFormInfo) to update
        // actions/loginForm.js"
      }



    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history) //loggin from curentUser action
        // fetches form data and returns JSON
        // history passes object
    }
    


    return (
      <div>


    <form onSubmit={handleSubmit}>
      <input style={{visibility: "hidden"}} placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input style={{visibility: "hidden"}} placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input type="submit" value="Open VisualCV"/>
    </form>
      <p>
        FACTS
      </p>
    
    </div>
    )
}







const mapStateToProps = state => { // taking state from REDUX thats ALREADY in the store
    return {
   //   username: state.loginForm.username,
   //   password: state.loginForm.password
   loginFormData: state.loginForm
}
  }

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
// connect to redux
// second argument -> imported action





/* mapStateToProps // taking state from REDUX 

redux dev:

loginForm
username(pin):"asdasd"
password(pin):"asdds" */