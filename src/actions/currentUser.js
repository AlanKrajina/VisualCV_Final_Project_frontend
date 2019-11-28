import { resetLoginForm } from "./loginForm.js"
import { getMyComments } from "./myComments.js"

// synchronous action creators

export const setCurrentUser = user => {   // receives user object
    return {
      type: "SET_CURRENT_USER",
      user                                // returns plain JS object
    }
  }


// asynchronous action creators

export const login = (credentials, history) => {     
/*{username: "Alan", password: "password"} */
                                                     // returns FUNCTION that returns FETCH with dispatch from redux
    return dispatch => {                    
        return fetch("http://localhost:3001/api/v1/login", {       // login Routes.rb rails + sessions controller (def create) 
                                                                   //       post "/api/v1/login", to: "api/v1/sessions#create"
          credentials: "include", //added from rails
          method: "POST",         // sending data
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials) // {username: "Alan", password: "password"} - loginamo i saljemo credentials
        })                                  // moramo imat jer je POST
        .then(r => r.json())
        .then(response => {
          if (response.error) { //error from sessions controller
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data)) // dispatch function
            // setCurrentUser -> ACTION creator
            dispatch(getMyComments())   
            dispatch(resetLoginForm())               // clears on login (redux loginForm)
            history.push('/')                        // receiving history object to return to initial url
          }
        })
        .catch(console.log)
    }
  }


export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
          // fetching current user
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyComments())   // u loginu?

        })
        .catch(console.log)
    }
  }

// LOGOUT

  export const clearCurrentUser = () => { // created action.type
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }

  export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())  // dispatched action.type to return NULL from reducer   (above)
   //   dispatch(clearTrips())

      return fetch('http://localhost:3001/api/v1/logout', {   //  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
        credentials: "include",
        method: "DELETE"
      })
    }
  }