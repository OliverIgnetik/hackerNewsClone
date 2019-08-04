import React from 'react'
// gives powers to the app
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// simple reducer
const actions = [
  {
    type: 'increment',
    value: 1,
  },
  {
    type: 'increment',
    value: 3,
  },
  {
    type: 'decrement',
    value: 2,
  },
]
const endState = actions.reduce(
  (state, action) => {
    if (action.type === 'increment') {
      console.log('incrementing')
      const { value } = state
      console.log({ state, action })
      // copy the state with a spread
      return { ...state, value: value + action.value }
    }
    if (action.type === 'decrement') {
      console.log('decrementing')
      const { value } = state
      console.log({ state, action })
      // copy the state with a spread
      return { ...state, value: value - action.value }
    }
    return state
  },
  { value: 0 },
)

console.log({ endState })

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
