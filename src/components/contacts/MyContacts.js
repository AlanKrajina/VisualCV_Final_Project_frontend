import React from 'react'
import { connect } from 'react-redux'
import "../Modal/Modal.css"
import github from "../../assets/github.jpg"
import linkedin from "../../assets/linkedin.jpg"
import mail from "../../assets/mail.jpg"

const MyContacts = ({ currentUser, loggedIn  }) => {
  const cssClasses = [
    "Modal",
    "Contact"
  ];

    return (
      loggedIn ?
      <div className={cssClasses.join(' ')}> 
     { currentUser.attributes.contacts.map(element =>  <address>Send me an <a href={"mailto:" + element.mail}>{<img className="img-responsive" src={mail} alt="logo"/>}</a></address>)}
     { currentUser.attributes.contacts.map(element => <p>Connect with me on <a href={element.linkedin}>{<img className="img-responsive" src={linkedin} alt="logo"/>}</a></p>)}
     { currentUser.attributes.contacts.map(element => <p>Work together with <a href={element.github}>{<img className="img-responsive" src={github} alt="logo"/>}</a></p>)}
      </div> : null
    )
  }

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(MyContacts)
