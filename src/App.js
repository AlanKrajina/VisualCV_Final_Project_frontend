import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" // user from API
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { Route, Switch, withRouter } from 'react-router-dom' // installed and imported dependencies


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
        <div className="nav">
          <NavBar/>
            <Route exact path='/login' component={Login}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}


export default connect (mapStateToProps, { getCurrentUser })(App);
