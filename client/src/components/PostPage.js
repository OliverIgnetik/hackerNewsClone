import React, { Component } from 'react'
import { Div } from 'glamorous'

import Post from './Post'

class PostPage extends Component {
  componentDidMount() {
    const { requestPost, postId } = this.props
    requestPost(postId)
  }
  render() {
    const { post } = this.props
    return !post ? (
      <Div>Loading</Div>
    ) : (
      <Div>
        <Post post={post} />
        {post.text && <Div>{post.text}</Div>}
      </Div>
    )
  }
}

export default PostPage
