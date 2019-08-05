import React, { Component } from 'react'

import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import glam, { Div } from 'glamorous'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './App.css'

// -----------------COMPONENTS ---------------------------
const Submit = () => {
  return <p>Submit</p>
}

const samplePosts = [
  {
    _id: '5ad3d976f0147b0fd0e5da91',
    comments: ['5ad3d986f0147b0fd0e5da92'],
    upVotes: [],
    downVotes: [],
    title: 'admin post',
    author: '5ad3d96cf0147b0fd0e5da90',
    text: 'admin post',
    createdAt: '2018-04-15T23:00:06.026Z',
  },
  {
    _id: '5ad3d976f0147b0fd0e5da91',
    comments: ['5ad3d986f0147b0fd0e5da92'],
    upVotes: [],
    downVotes: [],
    title: 'user post',
    author: '5ad3d96cf0147b0fd0e5da90',
    text: 'user post',
    createdAt: '2018-04-15T23:00:06.026Z',
  },
]

class Posts extends Component {
  componentDidMount() {
    console.log('posts component mounted', this.props.posts)
    // dispatch once mounted
    this.props.dispatch({ type: 'RECEIVE_POSTS', posts: samplePosts })
  }
  render() {
    const {posts} = this.props 
    console.log('rendering posts', posts);
    return <Div />
  }
}
// map state to props 
const mapStateToProps = state => {
  // double destructure
  const {posts:{posts}} = state
  return {
    posts: posts || []
  }
}

const enhancer = connect(mapStateToProps)
const ConnectedPosts = enhancer(Posts)

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
  render() {
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
                render={props => <ConnectedPosts {...props} />}
              />
            </Switch>
          </Div>
        </Content>
      </AppBase>
    )
  }
}

export default App
