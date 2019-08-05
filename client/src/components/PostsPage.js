import React, { Component } from 'react'
import { Div } from 'glamorous'
import { connect } from 'react-redux'

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
    this.props.dispatch({
      type: 'RECEIVE_POSTS',
      posts: samplePosts,
    })
  }
  render() {
    const { posts } = this.props
    return (
      <Div>
        {posts.map(post => (
          <Div key={post._id}>{post.text}</Div>
        ))}
      </Div>
    )
  }
}

const mapStateToProps = state => {
  const { posts: { posts } } = state
  return {
    posts: posts || [],
  }
}

const enhancer = connect(mapStateToProps)

export default enhancer(Posts)