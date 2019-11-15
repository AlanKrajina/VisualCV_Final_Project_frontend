const initialState = {
    username: "",
    password: ""
  }
  
  export default (state=initialState, action) => {
    // debugger formData ok
    switch (action.type) {
      case "UPDATE_SIGNUP_FORM":
        return action.formData  // formData being received from action
      case "RESET_SIGNUP_FORM":
        return initialState
      default:
        return state
    }
  }