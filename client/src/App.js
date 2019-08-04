import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import glam, { Div } from 'glamorous'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'

// -----------------COMPONENTS ---------------------------
const Submit = () => {
  return <p>Submit</p>
}

const Posts = ({ posts, comments }) => (
  <Div>{JSON.stringify({ posts, comments })}</Div>
)
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

class App extends Component {
  state = {
    posts: [{ id: 1, title: '1st post', text: 'Hello world', comments: [1] }],
    comments: [{ id: 1, postId: 1, text: '1st comment' }],
  }
  render() {
    const { posts, comments } = this.state
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
              <Route
                exact
                path='/Posts'
                render={props => <Posts posts={posts} comments={comments} />}
              />
            </Switch>
          </Div>
        </Content>
      </AppBase>
    )
  }
}

export default App
