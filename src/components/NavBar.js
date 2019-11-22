import React from 'react'
import { connect } from 'react-redux'  // connect grabs curretUser with mapStateToProps
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'
import SearchableWeathersContainer from './SearchableWeathersContainer/SearchableWeathersContainer.js'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <div>
      Weather Checker
      <SearchableWeathersContainer/>
      </div>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/projects"  >Projects </NavLink>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/blogs"  >Blogs </NavLink>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/experiences"  >Experience </NavLink>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/educations"  >Education </NavLink>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/contacts"  >Contact </NavLink>
      <NavLink style={{fontSize: "30px"}} exact activeClassName="active" to="/abouts"  >About</NavLink>

      <Logout/>








    </div>
  )
}
// { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout/></> : null}

    // ovdje dodat componente za sve ostalo i slat propse?


    const mapStateToProps = ({ currentUser }) => {
      return {
        currentUser,
        loggedIn: !!currentUser
      }
    }

export default connect(mapStateToProps)(NavBar)