export const updateSignupForm = formData => { // formData being sent to reducer
    //debugger
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }
  
  export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }