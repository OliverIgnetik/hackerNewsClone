import React from 'react'

import { Provider } from 'react-redux'
import postsReducer from './reducers/posts/reducer'
import commentsReducer from './reducers/comments/reducer'
import { createStore, combineReducers } from 'redux'
// gives powers to the app
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// combine reducers
const reducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
})

// createStore with initial state
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

console.log(store)

const samplePosts = [
  {
    _id: '5ad3d976f0147b0fd0e5da91',
    comments: ['5ad3d986f0147b0fd0e5da92'],
    upVotes: [],
    downVotes: [],
    title: 'admin post',
    author: '5ad3d96cf0147b0fd0e5da90',
    text: 'admin post',
    createdAt: '2018-04-15T23:00:06.026Z',
  },
  {
    _id: '5ad3d976f0147b0fd0e5da91',
    comments: ['5ad3d986f0147b0fd0e5da92'],
    upVotes: [],
    downVotes: [],
    title: 'user post',
    author: '5ad3d96cf0147b0fd0e5da90',
    text: 'user post',
    createdAt: '2018-04-15T23:00:06.026Z',
  },
]

// dispatch request to store
setTimeout(() => {
  store.dispatch({
    type: 'RECEIVE_POSTS',
    posts: samplePosts,
  })
}, 1500)

ReactDOM.render(
  // make the app aware of the store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
