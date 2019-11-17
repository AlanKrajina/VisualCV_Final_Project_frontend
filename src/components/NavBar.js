import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import Login from './Login.js'
import Signup from './Signup'
// shows if user is loged in

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="nav">
     { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout/></> : null}

    </div>
  )
}

    // { currentUser ? null : <Signup/>   }

    // { currentUser ? <Logout/> : <Login/> }


    const mapStateToProps = ({ currentUser }) => {
      return {
        currentUser,
        loggedIn: !!currentUser
      }
    }

export default connect(mapStateToProps)(NavBar)