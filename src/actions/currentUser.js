
// synchronous action creators
// returns plain JS object

export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }

// asynchronous action creators
// returns FUNCTION that returns FETCH with dispatch from redux
// login route rails sessions contr

export const login = (credentials) => {
    /* console.log(credentials)
    {username: "asd", password: "aasd"} */
    
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials) // {username: "alan", password: "password"}
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
         //   history.push('/')
          }
        })
        .catch(console.log)
    }
  }
