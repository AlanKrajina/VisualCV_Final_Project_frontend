import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import "../components/Modal/Modal.css";
import { Button } from 'react-bootstrap'
import picard from '../assets/picard.jpg';

const sectionStyle = {
  backgroundImage: `url(${picard})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '635px',
  top: "10%"
};

const cssClasses = [
  "Modal",
  "Modal2"
];

const Login = ({ loginFormData, updateLoginForm, login , history}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
              [name]: value
        }
        updateLoginForm(updatedFormInfo) 
      }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }
    
    return (
      <div className={cssClasses.join(' ')}>
    <form  className="Modal2" onSubmit={handleSubmit}>
      <input style={{visibility: "hidden"}} placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input style={{visibility: "hidden"}} placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <Button variant="primary" type="submit">
      Quick Login
      </Button>
    </form>
      <div>
        <h4>VisualCV</h4>
        <div style={{color: "blue"}}>
          <p>Welcome to my final Flatiron School project.</p>
          <p>Project completes two ideas, one being my personal website + online CV and second a fully completed Flatiron School final project.
           VisualCV is build upon React/Redux for frontend and Rails for backend.</p>
          <p>Main parts of the project:</p>
          <li>RESTful JSON API and Routing with Rails</li>
          <li>External JSON OpenWeather API</li>
          <li>Redux Thunk middleware for responding and modifying state change</li>
          <li>Utilizes fetch() within actions to GET and POST data from API</li>
          <li>Fast JSON:API serializer for Ruby Objects</li>
          <li>ActiveRecord for Object-relational mapping in Rails</li>
          <li>SQLite database</li>
          <li>Build upon ES6 JS standards</li>
        </div>
        <p className="quote">“Things are only impossible until they are not.” ― Jean-Luc Picard</p>
        <a href="#null">Hover to Engage
          <div id="sectionStylePicard" style={ sectionStyle }></div>
        </a>
      </div>
     </div>
    )
}

const mapStateToProps = state => {
    return {
   loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
