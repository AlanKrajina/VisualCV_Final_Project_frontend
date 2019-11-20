import React from 'react'
import { connect } from 'react-redux'

const MyProjects = ({ currentUser, loggedIn  }) => {
  return (
    loggedIn ?
    <div className="nav">

        {currentUser.attributes.educations.map(element => 
          <div>
           <h4>{element.school}</h4>
           <p>{element.location}</p>
           <p>{element.content}</p>
           <h5>{element.certification_name}</h5>
           <p>{element.certification_content}</p>
        </div>
        )} </div> : null
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyProjects)