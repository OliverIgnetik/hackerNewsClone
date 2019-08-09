import { connect } from 'react-redux'

import PostPage from './../components/PostPage'
import { requestPost } from '../reducers/posts/actions'

const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { postId },
    },
  } = props
  const {
    posts: { post },
  } = state
  return { post, postId }
}

const mapDispatchToProps = dispatch => {
  return {
    requestPost: (postId, cb) => requestPost(dispatch, postId, cb),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage)
