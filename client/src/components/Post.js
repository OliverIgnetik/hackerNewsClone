import React from 'react'
import glam, { Div } from 'glamorous'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import { Icon, Modal } from 'antd'

// confirm button from Modal 
const { confirm } = Modal

// delete posts confirmation 
const showDeleteConfirm = postTitle => {
  confirm({
    title: 'Are you sure you want to delete this post?',
    content: `${postTitle} will be deleted!`,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('Deleted!')
    },
  })
}

// define Delete button
const DeleteButton = glam.span({ cursor: 'pointer' })

// PostColumn with flex column
const PostColumn = glam.div({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 10,
})

// vote icon with hover
const VoteIcon = glam(Icon)({
  color: 'rgba(0,0,0,0.05)',
  cursor: 'pointer',
  ':hover': {
    color: 'rgba(0,0,0,0.5)',
  },
})

// define post
const Post = props => {
  const { post } = props
  const {
    //New destructured values
    _id: postId,
    title,
    text,
    author,
    voteScore = 0,
    createdAt,
  } = post
  const postUrl = `/posts/${post._id}`
  return (
    <Div css={{ display: 'flex', alignItems: 'center' }}>
      <PostColumn>
        <VoteIcon type='caret-up' />
        <VoteIcon type='caret-down' />
      </PostColumn>
      <PostColumn>
        <Div>
          <Link to={postUrl}>{title}</Link>
        </Div>
        <Div css={{ fontWeight: 'light', fontSize: 12 }}>
          {voteScore || 0} points | Posted by{``}
          {author.username} | {DateTime.fromISO(createdAt).toLocaleString()} |{' '}
          <DeleteButton onClick={() => showDeleteConfirm(title)}>
            Delete
          </DeleteButton>
        </Div>
      </PostColumn>
    </Div>
  )
}

export default Post
