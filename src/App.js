import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" // user from API
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <Switch>
        <div className="nav">
          <NavBar/>
          <MainContainer/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={Logout}/>
        </div>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}


export default connect (mapStateToProps, { getCurrentUser })(App);
