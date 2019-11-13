const initialState = {
    username: "",
    password: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.formData  // new data
      case "RESET_LOGIN_FORM":
        return initialState // username, password  ""
                            // after build action creator in loginForm
      default:
        return state
    }
  }
