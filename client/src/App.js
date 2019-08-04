import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import glam, { Div } from 'glamorous'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'

// -----------------COMPONENTS ---------------------------
const Submit = () => {
  return <p>Submit</p>
}

const Posts = () => <p>Posts</p>
// -----------------STYLES ---------------------------
// styled links with import from react router
// you can pass in the link as the indicator for glam
const StyledLink = glam(Link)(
  {
    color: 'white',
    // destructure the props
    // color: color ~ color
  },
  ({ color }) => ({ color }),
)
// HeaderLink adds padding to styled link
const HeaderLink = ({ to, children }) => (
  <Div css={{ padding: '0 10px' }}>
    <StyledLink to={to}>{children}</StyledLink>
  </Div>
)

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

// extend the styles of LayoutHeader
const Header = glam(Layout.Header)({
  display: 'flex',
})

// app based components
const AppBase = glam(Layout)({
  minHeight: '100vh',
})

const Content = glam(Layout.Content)({
  padding: 50,
})

// -----------------STYLES ---------------------------

function App() {
  return (
    <AppBase>
      <Header>
        {/* anchor tags to endpoints */}
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='/submit'>Submit</HeaderLink>
      </Header>
      {/* Switch ensures both components do not render */}
      <Content>
        <Div css={{ padding: 20, backgroundColor: 'white', minHeight: 280 }}>
          <Switch>
            {/* only match when the path is exactly this */}
            {/* redirect the user to the posts page */}
            <Redirect exact path='/' to='/posts' />
            <Route exact path='/submit' component={Submit} />
            <Route exact path='/Posts' component={Posts} />
          </Switch>
        </Div>
      </Content>
    </AppBase>
  )
}

export default App
