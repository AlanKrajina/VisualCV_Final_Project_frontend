import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyBlogs = ({ currentUser, loggedIn  }) => {
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

export default connect(mapStateToProps)(MyBlogs)

/* 
  
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyProjects = props => {
  const tripCards = props.trips.length > 0 ?
    props.trips.map(t => (<p key={t.id}><Link to={`/trips/${t.id}`}>{t.attributes.name}</Link></p>)) :
    null

  return tripCards
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}

export default connect(mapStateToProps)(MyProjects) */


























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