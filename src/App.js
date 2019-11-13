import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <div className="nav">
        <NavBar/>
        <MainContainer/>
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
