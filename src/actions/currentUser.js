import { resetLoginForm } from "./loginForm.js"
import { getMyComments } from "./myComments.js"

// synchronous action creators

export const setCurrentUser = user => {  
    return {
      type: "SET_CURRENT_USER",
      user                  
    }
  }


// asynchronous action creators

export const login = (credentials, history) => {     
    return dispatch => {                    
        return fetch("http://localhost:3001/api/v1/login", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
        })                               
        .then(r => r.json())
        .then(response => {
          if (response.error) { 
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data)) 
            dispatch(getMyComments())   
            dispatch(resetLoginForm())              
          }
        })
        .catch(console.log)
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyComments())   
        })
        .catch(console.log)
    }
  }

// LOGOUT

  export const clearCurrentUser = () => {
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }

  export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())
      return fetch('http://localhost:3001/api/v1/logout', {  
        credentials: "include",
        method: "DELETE"
      })
    }
  }