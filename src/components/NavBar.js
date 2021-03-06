import React from 'react'
import { connect } from 'react-redux'  
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
      <NavLink exact activeClassName="active" to="/blogs">Blogs</NavLink>
      <NavLink exact activeClassName="active" to="/experiences">Experience</NavLink>
      <NavLink exact activeClassName="active" to="/educations">Education</NavLink>
      <NavLink exact activeClassName="active" to="/abouts">About</NavLink>
      <NavLink exact activeClassName="active" to="/contacts">Contact</NavLink>
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