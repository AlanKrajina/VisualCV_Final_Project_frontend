import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyBlogs = ({ currentUser, loggedIn  }) => {
    return (
      <div className="nav">

       { loggedIn ? <><p>{currentUser.attributes.blogs.map(element => element.attributes.title)}</p></> : null}
  
      </div>
    )
  }



const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyBlogs)