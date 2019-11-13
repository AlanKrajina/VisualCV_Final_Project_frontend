import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
  return (
    <NavBar/>

  );
}
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}
export default connect (mapStateToProps, { getCurrentUser })(App);
