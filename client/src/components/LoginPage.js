import React from 'react'
import { Div, H3 } from 'glamorous'
import LoginForm from './../containers/LoginForm'

const LoginPage = () => {
  return (
    <Div>
      <H3>Login</H3>
      <LoginForm />
    </Div>
  )
}

export default LoginPage