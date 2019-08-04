import React from 'react'
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import glam, { Div } from 'glamorous'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

// styled links with import from react router
// you can pass in the link as the indicator for glam
const StyledLink = glam(Link)({
  color: 'white',
  // destructure the props 
  // color: color ~ color 
},({color})=>({color}))

const Posts = () => <p>Posts</p>

// glamorous object for CSS
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
        {/* anchor tags to endpoints */}
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/posts'>Posts</StyledLink>
      </AppHeader>
      {/* Switch ensures both components do not render */}
      <Switch>
        {/* only match when the path is exactly this */}
        {/* redirect the user to the posts page */}
        <Redirect exact path='/' to='/posts' />
        <Route exact path='/posts' component={Posts} />
      </Switch>
    </Div>
  )
}

export default App
