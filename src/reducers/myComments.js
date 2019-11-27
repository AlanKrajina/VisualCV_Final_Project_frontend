const initialState = []


export default (state = initialState, action) => {
    switch (action.type) {

// ovodje inicialState bi trebao bit currentUser.attributes.blogs...
//        case "ADD_COMMENT":
//          return initialState.concat(action.comment)
          case 'ADD_COMMENTS':
            const comment = {
                text: action.comment.attributes.text, 
                blogId: action.comment.relationships.blog.data.id,  
                id: action.comment.id
            }
            return state.concat(comment)
          //  return {...state, comments: [...state.attributes.blogs.map(element => element.attributes.comments), comment]}




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

