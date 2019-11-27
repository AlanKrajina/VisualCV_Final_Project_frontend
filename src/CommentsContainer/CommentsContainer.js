import React, { Component } from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
import { createComment } from '../actions/myComments'
import { deleteComment } from '../actions/myComments'

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

///////////// ovdje nesto gore ne valja, salje prazni comments array iz bloga umjesto comments od currentUsera


const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(createComment(comment)),  // umjesto ovog myBlogs action?
  deleteComment: id => dispatch(deleteComment(id))
  //deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

const mapStateToProps = state => {
  return {
    comments: state.myComments
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer)
