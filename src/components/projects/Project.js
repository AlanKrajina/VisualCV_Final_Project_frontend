import React from 'react'
import {Link} from 'react-router-dom'

const Project = ({ project }) => {
  return (
    project ?
      <div>
           {<h3>{project.title}</h3>}
           {<p>{project.content}</p>}
           {<a href={project.video_link}>Visit youtube link</a>}
           <span> or </span>
           {<a href={project.github}>Visit github link</a>}
      </div> :
      <p>This the the Trip card with no trip!</p>
  )
}

export default Project