import { getMyComments } from "./myComments.js"
import { clearComments } from "./myComments.js"

// synchronous action creators

export const setCurrentUser = user => {  
    return {
      type: "SET_CURRENT_USER",
      user                  
    }
  }


// asynchronous action creators

export const login = (credentials) => {     
    return dispatch => {                    
      var auth_params = {auth:
        credentials
    }
        return fetch("https://visualcv.herokuapp.com/api/v1/login", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://visualcvreact.herokuapp.com"
          },
          body: JSON.stringify(auth_params)
        })                               
        .then(r => r.json())
        .then(response => {
          if (response.error) { 
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data)) 
            dispatch(getMyComments())   
          }
        })
        .catch(console.log)
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("https://visualcv.herokuapp.com/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://visualcv.herokuapp.com"
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
      dispatch(clearComments())   
      return fetch('https://visualcv.herokuapp.com/api/v1/logout', {  
        credentials: "include",
        method: "DELETE"
      })
    }
  }

