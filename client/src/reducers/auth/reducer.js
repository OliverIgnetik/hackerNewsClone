import { RECEIVE_USER } from './actions'

const initialState = { user: {}, isLoggedIn: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      const { user } = action
      return {...state,user,}
    }
    default:
      return state
  }
}
