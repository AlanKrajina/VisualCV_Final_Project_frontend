import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyProjects = ({ currentUser, loggedIn  }) => {
    return (
        loggedIn ?
        <div className="nav">
    
            {currentUser.attributes.projects.map((element, index) => 
              <div>
               <p key={index}><Link to={`/projects/${index}`}>{element.title}</Link></p>
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


























/* import Modal from "./components/Modal/Modal";


state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }


<div className="App">
    <h1>Projects</h1>
    <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
    <button className="Button" onClick={this.showModal}>Open </button>
</div> */