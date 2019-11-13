export default (state = null, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return action.user
      case "CLEAR_CURRENT_USER": // added 
        return null
      default:
        return state
    }
  }

/* Redux dev tool:
user(pin):
currentUser(pin):null */


// needs to match action.type 