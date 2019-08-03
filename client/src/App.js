import React from 'react'

import glam, { Div } from 'glamorous'
import { css } from 'glamor'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const Posts = () => <p>Posts</p>

// glamorous object for CSS
// glam.any_HTML_element
const AppHeader = glam.header({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontsize: 'calc(10px + 2vmin)',
  color: 'white',
})

function App() {
  return (
    <Div css={{ textAlign: 'center' }}>
      <AppHeader>
        <img src={logo} className='App-logo' alt='logo' />

        {/* Switch ensures both components do not render */}
        <Switch>
          {/* only match when the path is exactly this */}
          {/* redirect the user to the posts page */}
          <Redirect exact path='/' to='/posts' />
          <Route path='/posts' component={Posts} />
        </Switch>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {/* anchor tags to endpoints */}
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      </AppHeader>
    </Div>
  )
}

export default App
