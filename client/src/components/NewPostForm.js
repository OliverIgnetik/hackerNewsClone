import React, { Component } from 'react'
import glam, { Div } from 'glamorous'
import { Button, Form, Icon, Input } from 'antd'

const FormIcon = glam(Icon)({
  color: 'rgba(0,0,0,0.25)',
})
const StyledForm = glam(Form)({ maxWidth: 300 })
class NewPostForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input title' }],
          })(<Input prefix={<FormIcon type='tag-o' />} placeholder='Title' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('url')(
            <Input prefix={<FormIcon type='link' />} placeholder='URL' />,
          )}
        </Form.Item>
        <Div>OR</Div>
        <Form.Item>
          {getFieldDecorator('text')(
            <Input prefix={<FormIcon type='file-text' />} placeholder='text' />,
          )}
        </Form.Item>
        <Form.Item>
            <Button type='primary' htmlType='submit'>Submit</Button>
        </Form.Item>
      </StyledForm>
    )
  }
}

export default Form.create()(NewPostForm)
