import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" // user from API
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'

import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom' // installed and imported dependencies

import MyProjects from './components/projects/MyProjects.js'
import Project from './components/projects/Project.js'

import MyBlogs from './components/blogs/MyBlogs.js'
import Blog from './components/blogs/Blog.js'

import MyExperiences from './components/experiences/MyExperiences.js'
import MyEducations from './components/educations/MyEducations.js'
import MyContacts from './components/contacts/MyContacts.js'
import MyAbouts from './components/abouts/MyAbouts.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    const { loggedIn, projects, blogs } = this.props

    return (
        <div className="nav">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
            <Route exact path='/login' component={Login}/> 
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/logout' component={Logout}/>

            <Route exact path='/projects' component={MyProjects}/>
            <Route exact path='/projects/:id' render={props => {
              const project = projects.attributes.projects.find((element, index) => index === parseInt(props.match.params.id))
              console.log(project)
              return <Project project={project} {...props}/>
            }
          }/>
            <Route exact path='/blogs' component={MyBlogs}/>
            <Route exact path='/blogs/:id' render={props => {
              const blog = blogs.attributes.blogs.find((element, index) => index === parseInt(props.match.params.id))
              console.log(blog)
              return <Blog blog={blog} {...props}/>
            }
          }/>
            <Route exact path='/experiences' component={MyExperiences}/>
            <Route exact path='/educations' component={MyEducations}/>
            <Route exact path='/contacts' component={MyContacts}/>
            <Route exact path='/abouts' component={MyAbouts}/>
        </Switch>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    projects: state.currentUser,
    blogs: state.currentUser
  })
}

export default withRouter(connect (mapStateToProps, { getCurrentUser })(App));// grabing from redux
