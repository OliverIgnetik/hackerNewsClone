// postReducer
const initialState = {
  posts: [
    {
      id: 1,
      title: '1st post',
      text: 'Hello world',
      comments: [1],
    },
  ],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      const {posts} = action 
      console.log({posts});
      return {...state, posts}
    }
    default:
      return state
  }
}
