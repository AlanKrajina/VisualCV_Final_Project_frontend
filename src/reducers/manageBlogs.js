import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBlogs (state = {
    comments: []
}, action) {
    switch (action.type) {

        case 'ADD_COMMENT':
            const comment = {
                text: action.comment.text, 
                blogId: action.comment.blogId,  
                id: cuid()
            }
            return {...state, comments: [...state.comments, comment]}

        case 'DELETE_COMMENT':
            const comments = state.comments.filter(rev => rev.id !== action.id);
            return {
               ...state, 
               comments
            };

        default:
            return state;

    }
}