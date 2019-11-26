import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import "../components/Modal/Modal.css";
import { Button } from 'react-bootstrap'
import picard from '../picard.jpg';

const sectionStyle = {
  backgroundImage: `url(${picard})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '630px'
};


const Login = ({ loginFormData, updateLoginForm, login , history}) => {   // destructured username and password from "loginFormData" we made up
                                                                          // then they go to FORM as -> VALUE to fill in on input
                                                                    // updateLoginForm - action as argument

    const handleInputChange = event => {
        const { name, value } = event.target // dinamically grabs name and value (onChange)
        const updatedFormInfo = {            // NEW UPDATED DATA from form
            ...loginFormData,   // destructures object and keeps properties in place (username + password)
              [name]: value     // this takes them out ([name] -> form - name= username and password)
        }
        updateLoginForm(updatedFormInfo) // UPDATES OBJECT - sends current state(updatedFormInfo=loginFormData) to update -> actions/loginForm.js
        // actions/loginForm.js  -> returns action.formData object + action.type "UPDATE_LOGIN_FORM" for -----> REDUCER
        // then REDUCER - reducers/loginForm.js checks action.type "UPDATE_LOGIN_FORM" and returns ->action.formData<- that updates REDUX store
      }



    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history) //login from curentUser action
        // fetches form data and returns JSON
        // history passes object
    }
    


    return (
      <div  className="Modal">
    <form  className="Modal2" onSubmit={handleSubmit}>
      <input style={{visibility: "hidden"}} placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input style={{visibility: "hidden"}} placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <Button variant="primary" type="submit">
      Login to VisualCV
      </Button>
    </form>
      <div>
        <h4>FACTS</h4>
        <div style={{color: "blue"}}>
          <p>Welcome to my portfolio project VisualCV.</p>
          <p>Project itself combines two ideas, first being my personal website and online CV, second a fully completed Flatiron School final project.
           VisualCV is build upon React/Redux for frontend and Rails for backend.</p>
          <p>Three main parts of the project:</p>
          <p>1. Utilization of Rails backend API + React/Redux GET and POST fetch requests (this involves Login on press of a button - no credentials needed)</p>
          <p>2. Usage of an External API from a opensource website using only React (Weather Checker component)  </p>
          <p>3. Ability to add comments on a Blog post using React/Redux without API </p>
        </div>
        <p className="quote">“Things are only impossible until they are not.” ― Jean-Luc Picard</p>
        <a>Hover to Engage
          <div id="sectionStylePicard" style={ sectionStyle }></div>
        </a>
      </div>
     </div>
    )
}






const mapStateToProps = state => { // taking state from REDUX thats ALREADY in the store
    return {
   //   username: state.loginForm.username,
   //   password: state.loginForm.password
   loginFormData: state.loginForm                  // login argument and form value
}
  }

export default connect(mapStateToProps, { updateLoginForm, login })(Login) // gets state from STORE plus ACTIONS - updateLoginForm (takes formData)
                                                                                                      // instead mapDispatchToProps