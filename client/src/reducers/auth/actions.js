import { fetchApi } from './../api'

export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (dispatch, data) => {
    dispatch({ type: LOGIN_USER })
    fetchApi({
      url: '/auth/login',
      method: 'POST',
      data,
    }).then(res => console.log({ res }))
  }