import { fetchApi } from '../api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SUBMIT_POST = 'SUBMIT_POST'

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

export const submitPost = (dispatch, data, cb) => {
  dispatch({
    type: SUBMIT_POST,
  })
  fetchApi({
    url: '/posts',
    data,
    method: 'POST',
  })
    .then(res => cb(null, res))
    .then(() => requestPosts(dispatch))
    .catch(cb)
}
