import { connect } from 'react-redux'
import PostsPage from '../components/PostsPage'

const mapStateToProps = state => {
  const {
    posts: { posts },
  } = state
  return {
    posts: posts || [],
  }
}

const enhancer = connect(mapStateToProps)

export default enhancer(PostsPage)
