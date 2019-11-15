import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"

// synchronous action creators
// returns plain JS object

export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }

// SIGNUP

export const signup = (credentials) => { // credentials = {username: "AlanKrajina", password: "123123"}
  return dispatch => {
    
    return fetch("http://localhost:3001/api/v1/signup", {  //console error failed to load
      credentials: "include", //added from rails
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
        dispatch(setCurrentUser(response.data)) // dispatch function
        dispatch(resetSignupForm()) // clears on signup (redux signupForm)
      }
    })
    .catch(console.log)
}
}




// asynchronous action creators
// returns FUNCTION that returns FETCH with dispatch from redux
// login route rails sessions contr

export const login = (credentials) => {
    /* console.log(credentials)
    {username: "Alan", password: "password"} */

    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
          credentials: "include", //added from rails
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials) // {username: "Alan", password: "password"}
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) { //error from sessions controller
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data)) // dispatch function
            // setCurrentUser -> ACTION creator
            dispatch(resetLoginForm()) // clears on login (redux loginForm)
          }
        })
        .catch(console.log)
    }
  }

/* redux dev:

currentUser:
  id(pin):"1"
  type(pin):"user"

  attributes:
    username(pin):"Alan"

    projects:
        0
        title(pin):"Test project 1"
        content(pin):"text text text text text text "
        video_link(pin):"https://www.youtube.com/"
        github(pin):"https://github.com/"
        1
        title(pin):"Test project 2"
        content(pin):"text text text text text text "
        video_link(pin):"https://www.youtube.com/"
        github(pin):"https://github.com/"
.
.
. */


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
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
          }
        })
        .catch(console.log)
    }
  }

  /* now after typing username and password THERE is NO alert(response.error) (no one logged in)
  meaning user loged in
  currentUser set (redux tools) */



// LOGOUT

  export const clearCurrentUser = () => { // created action.type
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }

  export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())  // dispatched action.type to return NULL from reducer   (above)
      return fetch('http://localhost:3001/api/v1/logout', {   //  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
        credentials: "include",
        method: "DELETE"
      })
    }
  }



