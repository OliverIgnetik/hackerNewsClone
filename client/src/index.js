import React from 'react'

import { createStore } from 'redux'
// gives powers to the app
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// reducer
const reducer = (state, action) => {
  if (action.type === 'increment') {
    const { value } = state
    // copy the state with a spread
    return { ...state, value: value + action.value }
  }
  if (action.type === 'decrement') {
    const { value } = state
    // copy the state with a spread
    return { ...state, value: value - action.value }
  }
  return state
}

// createStore with initial state
const store = createStore(reducer, {})

console.log({store});


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
