import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import Login from './Login.js'
import Signup from './Signup'


const NavBar = ({ currentUser }) => {
  return (
    <div className="nav">
     { currentUser ? <p>Welcome {currentUser.attributes.username}</p> : ""}

     { currentUser ? <Logout/> : <Login/> }
     <Signup/>

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