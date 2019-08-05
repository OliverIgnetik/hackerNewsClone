import { connect } from 'react-redux'
import PostsPage from '../components/PostsPage'
import { receivePosts } from '../reducers/posts/actions'

const mapStateToProps = state => {
  const {
    posts: { posts },
  } = state
  return {
    posts: posts || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receivePosts: posts => dispatch(receivePosts(posts)),
  }
}

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default enhancer(PostsPage)
