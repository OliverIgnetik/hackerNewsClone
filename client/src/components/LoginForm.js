import React, { Component } from 'react'
import glam from 'glamorous'
import { Button, Form, Icon, Input } from 'antd'

const StyledForm = glam(Form)({ maxWidth: 300 })
const LoginIcon = glam(Icon)({ color: 'rgba(0,0,0,0.25)' })

class LoginForm extends Component {
  handleSubmit = e => {
    console.log({ e })
    e.preventDefault()
    const { form, handleSubmit,redirect } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values, err => {
          if (err) {
            return form.setFields({
              password: {
                value: values.password,
                errors: [new Error(err.response.data.message)],
              },
            })
          }
          redirect()
        })
      }
    })
  }

  render() {
    const { form,type } = this.props
    console.log({ form })
    const { getFieldDecorator } = form
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username',
              },
            ],
          })(
            <Input prefix={<LoginIcon type='user' />} placeholder='Username' />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password',
              },
            ],
          })(
            <Input
              prefix={<LoginIcon type='lock' />}
              placeholder='Password'
              type='password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {type =='login'?'Login':'Signup'}
            </Button>
        </Form.Item>
      </StyledForm>
    )
  }
}

export default Form.create()(LoginForm) //Only tweak we're making at the moment
