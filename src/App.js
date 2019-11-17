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
