import React from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const Home = () => {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  )
}

const Posts = () => <p>Posts</p>


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        
        <Route path='/' component = {Home}/>
        <Route path='/posts' component = {Posts}/>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
