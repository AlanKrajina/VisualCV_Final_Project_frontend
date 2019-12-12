// synchronous actions
export const setMyComments = comments => {
    return {
      type: "SET_MY_COMMENTS",
      comments
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

  export const clearComments = () => {
    return {
      type: "CLEAR_COMMENTS"
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
        .then(response => {   // response = array
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyComments(response.data)) // http://localhost:3001/api/v1/comments 
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
            history.push(`/comments/${resp.data.id}`)
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
          }
        })
        .catch(console.log)
    }
  }