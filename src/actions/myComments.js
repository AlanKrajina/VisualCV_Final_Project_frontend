 // async actions

// synchronous actions
export const setMyComments = comments => {
    return {
      type: "SET_MY_COMMENTS",
      comments
    }
  }
  
  export const clearComments = () => {
    return {
      type: "CLEAR_COMMENTS"
    }
  }
  
  export const addComment = comment => {
    return {
      type: "ADD_COMMENTS",
      comment
    }
  }
  
  export const deleteCommentSuccess = commentId => {
    return {
      type: "DELETE_COMMENTS",
      commentId
    }
  }
  


 // async actions


export const getMyComments = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/comments", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyComments(response.data))
          }
        })
        .catch(console.log)
    }
  }
  
  export const createComment = (commentData, history) => {
    return dispatch => {
      const sendableCommentData = {
        text: commentData.text,
        blog_id: commentData.blogId
      }
      return fetch("http://localhost:3001/api/v1/comments", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableCommentData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addComment(resp.data))
           // dispatch(resetCommentForm())
            history.push(`/comments/${resp.data.id}`)
            // go somewhere else --> trip show?
            // add the new trip to the store
          }
        })
        .catch(console.log)
  
    }
  } 



  export const deleteComment = (commentId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/comments/${commentId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteCommentSuccess(commentId))
            history.push(`/comments`)
            // go somewhere else --> trip show?
            // add the new trip to the store
          }
        })
        .catch(console.log)
  
    }
  
  }













/* 
  export default function deleteComment (state = { // state = {comments: Array(0)} jer trazi u manageBlogs reduceru
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
          const comments = state.comments.filter(rev => rev.id !== action.id); // state = {comments: Array(0)}
          return {
             ...state, 
             comments
          };

      default:
          return state;

  }
} */