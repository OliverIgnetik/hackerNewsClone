import { fetchApi } from '../api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
})

export const requestPosts = dispatch => {
  dispatch({ type: REQUEST_POSTS })
  fetchApi({ url: '/posts' }).then(res =>
    dispatch(receivePosts(res.data.posts)),
  )
}

