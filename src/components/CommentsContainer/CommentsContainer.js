import React, { Component } from 'react'
import CommentInput from '../comments/CommentInput'
import Comments from '../comments/Comments'
import { connect } from 'react-redux'
import { createComment } from '../../actions/myComments'
import { deleteComment } from '../../actions/myComments'

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

const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(createComment(comment)),  
  deleteComment: id => dispatch(deleteComment(id))
})

const mapStateToProps = state => {
  return {
    comments: state.myComments
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer)
