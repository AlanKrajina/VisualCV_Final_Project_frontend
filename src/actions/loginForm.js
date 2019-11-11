export const updateLoginForm = (formData) => {
 //   console.log(formData)
/*  {name: "username", value: "d"}
    {name: "password", value: "d"} */

    return {
      type: "UPDATE_LOGIN_FORM",
      formData
    }
  }
  
  export const resetLoginForm = () => {
    return {
      type: "RESET_LOGIN_FORM"
    }
  }