const initialState = []


export default (state = null, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return action.user
      case "CLEAR_CURRENT_USER": 
        return null
      

// ovodje inicialState bi trebao bit currentUser.attributes.blogs...
        case "ADD_COMMENT":
          return initialState.concat(action.comment)

          case 'DELETE_COMMENT':
            const comments = state.comments.filter(rev => rev.id !== action.id); // state = {comments: Array(0)}
            return {
               ...state, 
               comments
            };

     default:
        return state
    }
  }

