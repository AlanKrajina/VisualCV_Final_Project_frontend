import React, { Component } from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  render() {
    return (
      <div>
          <CommentInput
            addComment={this.props.addComment}
            blogId={this.props.blog.id} 
            />
          <Comments
            comments={this.props.comments}
            deleteComment={this.props.deleteComment}
            blogId={this.props.blog.id}
            />
      </div>
    )
  }
}

const mapStateToProps = ({ manageBlogs }) => {
    return {
        comments: manageBlogs.comments  
    }
  }


const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch({ type: 'ADD_COMMENT', comment}),
  deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer)

