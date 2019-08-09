import { RECEIVE_POSTS,RECEIVE_POST } from './actions'

// postReducer
const initialState = {
  posts: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS: {
      const { posts } = action
      return { ...state, posts }
    }

    case RECEIVE_POST: {
      const { post } = action
      return { ...state, post }
    }
    default:
      return state
  }
}
