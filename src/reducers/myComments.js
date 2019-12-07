const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
            case "SET_MY_COMMENTS":
            return action.comments

            case 'ADD_COMMENTS':
              const comment = {
                attributes: {
                text: action.comment.attributes.text, 
                },
                id:action.comment.id,
                relationships: {
                      blog: {
                        data: {
                          id: action.comment.relationships.blog.data.id
                }}}
            }
            return state.concat(comment)

            case 'DELETE_COMMENTS':
              return state.filter(comment => comment.id === action.commentId ? false : true)
    default:
        return state
    }
  }

