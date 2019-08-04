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
    default:
      return state
  }
}
