import React from 'react'

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
  comments:commentsReducer,
})

// createStore with initial state
const store = createStore(
  reducer,
  { counter: { value: 10 } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

console.log({ store })

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
