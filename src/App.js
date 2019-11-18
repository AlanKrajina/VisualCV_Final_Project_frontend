import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" // user from API
import NavBar from './components/NavBar.js'
//import MainContainer from './components/MainContainer'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import { Route, Switch, withRouter } from 'react-router-dom' // installed and imported dependencies

import MyProjects from './components/projects/MyProjects.js'
import MyBlogs from './components/blogs/MyBlogs.js'
import MyExperiences from './components/experiences/MyExperiences.js'
import MyEducations from './components/educations/MyEducations.js'
import MyContacts from './components/contacts/MyContacts.js'
import MyAbouts from './components/abouts/MyAbouts.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    const { loggedIn } = this.props

    return (
        <div className="nav">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
            <Route exact path='/login' component={Login}/> 
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/logout' component={Logout}/>

            <Route exact path='/projects' component={MyProjects}/>
            <Route exact path='/blogs' component={MyBlogs}/>
            <Route exact path='/experiences' component={MyExperiences}/>
            <Route exact path='/educations' component={MyEducations}/>
            <Route exact path='/contacts' component={MyContacts}/>
            <Route exact path='/abouts' component={MyAbouts}/>
        </Switch>

        </div>
    );
  }
}
// <Route> connecting http://localhost:3000/login to component

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}


export default withRouter(connect (mapStateToProps, { getCurrentUser })(App));// grabing from redux
