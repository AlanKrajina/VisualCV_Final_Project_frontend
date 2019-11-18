import React from 'react'
import {Link} from 'react-router-dom'

const Project = ({ project }) => {
  //  debugger
  return (
    project ?
      <div>
        <h3>{project.attributes.title}</h3>
      </div> :
      <p>This the the Trip card with no trip!</p>
  )
}

export default Project