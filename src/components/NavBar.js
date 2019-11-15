import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import Login from './Login.js'


const NavBar = ({ currentUser }) => {
  return (
    <div className="nav">
     { currentUser ? <p>Welcome {currentUser.attributes.username}</p> : ""}

    <button> Login </button>
    OR
    <button> Signup </button>

    </div>
  )
}

    // { currentUser ? <Logout/> : <Login/> }


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)