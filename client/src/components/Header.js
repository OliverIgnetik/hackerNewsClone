import React from 'react'
import glam, { Div } from 'glamorous'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

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
const HeaderBase = glam(Layout.Header)({
  display: 'flex',
})

const Header = ({ isLoggedIn, logout }) => (
  <HeaderBase>
    <HeaderLink to="/">Home</HeaderLink>
    {isLoggedIn && (
      <HeaderLink to="/submit">Submit</HeaderLink>
    )}
    {isLoggedIn ? (
      <HeaderLink to="/posts">
        <Div onClick={logout}>Logout</Div>
      </HeaderLink>
    ) : (
      <HeaderLink to="/login">Login</HeaderLink>
    )}
  </HeaderBase>
)

export default Header
