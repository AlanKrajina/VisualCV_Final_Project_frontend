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
import ProjectModal from './components/Modal/ProjectModal.js'

import MyBlogs from './components/blogs/MyBlogs.js'
import BlogModal from './components/Modal/BlogModal.js'


import MyExperiences from './components/experiences/MyExperiences.js'
import MyEducations from './components/educations/MyEducations.js'
import MyContacts from './components/contacts/MyContacts.js'
import MyAbouts from './components/abouts/MyAbouts.js'


class App extends Component {
// added
  state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }







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
              const project = projects.attributes.projects.find(element => element.id === parseInt(props.match.params.id))
              console.log(project)
              return (
                <div>
              <ProjectModal show={this.state.modalIsOpen} closed={this.closeModal} project={project} {...props} /> 
              
              </div>
              )
 
            }
          }/>
            <Route exact path='/blogs' component={MyBlogs}/>
            <Route exact path='/blogs/:id' render={props => {
              const blog = blogs.attributes.blogs.find(element => element.id === props.match.params.id)
              console.log(blog)
              return <BlogModal blog={blog} {...props}/>
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
