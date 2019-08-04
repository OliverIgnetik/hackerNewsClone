import React from 'react'
// gives powers to the app
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// simple reducer
const numbers = [1,2,3]
const sum = numbers.reduce((acc,value)=>{
    console.log({acc,value})
    return acc + value
},0)

console.log({sum})

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
