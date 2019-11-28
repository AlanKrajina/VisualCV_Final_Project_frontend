import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
      <NavLink exact activeClassName="active" to="/blogs">Blogs</NavLink>
      <NavLink exact activeClassName="active" to="/experiences">Experience</NavLink>
      <NavLink exact activeClassName="active" to="/educations">Education</NavLink>
      <NavLink exact activeClassName="active" to="/contacts">Contact</NavLink>
      <NavLink exact activeClassName="active" to="/abouts">About</NavLink>
      <Logout/>
    </div>
  )
}

    const mapStateToProps = ({ currentUser }) => {
      return {
        currentUser,
        loggedIn: !!currentUser
      }
    }

export default connect(mapStateToProps)(NavBar)