import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target // updating username and password
    const updatedFormInfo = {
      ...signupFormData,                 
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)   // imported action from currentUser
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm          // getting data from state
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)