import React from 'react'
import {Link} from 'react-router-dom'

const Blog = ({ blog }) => {
  return (
    blog ?
      <div>
           {<h3>{blog.attributes.title}</h3>}
           {<p>{blog.attributes.content}</p>}
      </div> :
      <p>This the the Trip card with no trip!</p>
  )
}

export default Blog