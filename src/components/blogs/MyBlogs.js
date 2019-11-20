import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyBlogs = ({ currentUser, loggedIn  }) => {

  return (
    loggedIn ?
    <div className="nav">

        {currentUser.attributes.blogs.map( element => 
          <div>
           <p key={element.id}><Link to={`/blogs/${element.id}`}>{element.attributes.title}</Link></p>
        </div>
        )} </div> : <p>no blogs</p>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyBlogs)