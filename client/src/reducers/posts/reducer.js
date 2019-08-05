import {RECEIVE_POSTS} from './actions'

// postReducer
const initialState = {
  posts: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS: {
      const { posts } = action
      // console.log({posts});
      return { ...state, posts }
    }
    default:
      return state
  }
}
