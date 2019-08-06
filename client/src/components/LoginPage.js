import React, { Component } from 'react'
import glam, { Div, H3 } from 'glamorous'
import { Button, Form, Icon, Input } from 'antd'

const StyledForm = glam(Form)({ maxWidth: 300 })
const LoginIcon = glam(Icon)({ color: 'rgba(0,0,0,0.25)' })

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          <Input prefix={<LoginIcon type='user' />} placeholder='Username' />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LoginIcon type='lock' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary'>
            Login
          </Button>
        </Form.Item>
      </StyledForm>
    )
  }
}

const LoginPage = () => {
  return (
    <Div>
      <H3>Login</H3>
      <LoginForm />
    </Div>
  )
}

export default LoginPage
