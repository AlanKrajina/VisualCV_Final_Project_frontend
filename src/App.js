import React, { Component } from 'react'
import './App.css';
import Login from './components/Login.js'

class App extends Component {

    /* componentDidMount(){
    fetch("http://localhost:3001/api/v1/users/1")
        .then(r=>r.json())
        .then(console.log) 
} */


  render() {
  return (
    <Login/>
  );
}
}
export default App;
