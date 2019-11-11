const initialState = {
    username: "",
    password: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.formData  // new data
//      case "RESET_LOGIN_FORM":
//        return initialState
      default:
        return state
    }
  }

/* redux:
loginForm:
username(pin):""
password(pin):"" */