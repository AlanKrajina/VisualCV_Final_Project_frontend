export const updateLoginForm = (formData) => {
 //   console.log(formData)
/*  {name: "username", value: "d"}
    {name: "password", value: "d"} */
    return {
      type: "UPDATE_LOGIN_FORM",
      formData
    }
}
  

export const resetLoginForm = () => { // created action.type to sent do reducer and set STATE to ""
    return {
      type: "RESET_LOGIN_FORM"
    }
} 