import React from 'react'

import authReducer from './reducers/auth/reducer'

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
  posts : authReducer
})

// createStore with initial state
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

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
