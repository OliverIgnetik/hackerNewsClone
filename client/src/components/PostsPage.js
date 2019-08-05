import React, { Component } from 'react'
import { Div } from 'glamorous'
import Post from './Post'
import { fetchApi } from '../reducers/api'

class PostsPage extends Component {
  componentDidMount() {
    this.props.requestPosts()
  }
  render() {
    const { posts } = this.props
    return (
      <Div>
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </Div>
    )
  }
}

export default PostsPage
