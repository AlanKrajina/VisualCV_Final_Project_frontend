const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
            case "SET_MY_COMMENTS":
            return action.comments

            case 'ADD_COMMENTS':
              const comment = {
                text: action.comment.attributes.text, 
                blogId: action.comment.relationships.blog.data.id,  
                id: action.comment.id
            }
            return state.concat(comment)

            case 'DELETE_COMMENTS':
              return state.filter(comment => comment.id === action.commentId ? false : true)
    default:
        return state
    }
  }

