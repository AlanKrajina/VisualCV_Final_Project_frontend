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
     { currentUser.attributes.contacts.map(element => <address key={element.mail}>Send me an <a href={"mailto:" + element.mail} >{<img className="img-responsive" src={mail} alt="mail-logo"/>}</a></address>)}
     { currentUser.attributes.contacts.map(element => <p key={element.linkedin}>Connect with me on <a href={element.linkedin} >{<img className="img-responsive" src={linkedin} alt="linkedin-logo"/>}</a></p>)}
     { currentUser.attributes.contacts.map(element => <p key={element.github}>Work together with <a href={element.github} >{<img className="img-responsive" src={github} alt="github-logo"/>}</a></p>)}
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
