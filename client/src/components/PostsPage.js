import React, { Component } from 'react'
import { Div } from 'glamorous'
import Post from './Post'
import { fetchApi } from '../reducers/api'

class PostsPage extends Component {
  componentDidMount() {
    fetchApi({ url: '/posts' }).then(res =>
      this.props.receivePosts(res.data.posts),
    )
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
