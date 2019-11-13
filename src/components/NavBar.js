import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import Login from './Login.js'


const NavBar = ({ currentUser }) => {
  return (
    <div className="nav">
     { currentUser ? <p>Welcome {currentUser.attributes.username}</p> : ""}
     { currentUser ? <Logout/> : <Login/> }
    </div>
  )
}

// I an do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
// state = { ...,
//   currentUser: {...}
// }

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)