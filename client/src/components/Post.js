import React from 'react'
import glam, { Div } from 'glamorous'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import { Icon, Modal } from 'antd'

// confirm button from Modal
const { confirm } = Modal

// delete posts confirmation
const showDeleteConfirm = (postTitle, postId, deletePost, redirect) => {
  confirm({
    title: 'Are you sure you want to delete this post?',
    content: `${postTitle} will be deleted!`,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      deletePost(postId, err => {
        if (err) {
          return console.error(err)
        }
        redirect()
      })
    },
  })
}

// define Delete button
const DeleteButton = glam.span({
  cursor: 'pointer',
  color: 'white',
  background:'red',
  border: '1px solid red',
  borderRadius: 3,
  padding: 2,
  marginLeft: 10,
})

// PostColumn with flex column
const PostColumn = glam.div({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 10,
})

const VoteIcon = glam(Icon)(
  {
    color: 'rgba(0,0,0,0.25)',
    cursor: 'pointer',
    ':hover': {
      color: 'rgba(0,0,0,0.5)',
    },
  },
  ({ inactive }) =>
    inactive && {
      color: 'white',
      cursor: 'not-allowed',
      ':hover': { color: 'white' },
    },
)

// define post
const Post = props => {
  const {
    post,
    deletePost,
    canDelete,
    history,
    canVote,
    canUpvote,
    canDownvote,
    votePost,
  } = props

  const {
    //New destructured values
    _id: postId,
    title,
    text,
    author,
    comments,
    voteScore = 0,
    createdAt,
    url,
  } = post
  const postUrl = `/posts/${postId}`
  const redirect = () => history.push('/posts')
  return (
    <Div css={{ display: 'flex', alignItems: 'center' }}>
      {canVote && (
        <PostColumn>
          <VoteIcon
            onClick={() => votePost(postId, 1)}
            inactive={!canUpvote}
            type='caret-up'
          />
          <VoteIcon
            onClick={() => votePost(postId, -1)}
            inactive={!canDownvote}
            type='caret-down'
          />
        </PostColumn>
      )}
      <PostColumn>
        <Div>
          {url ? (
            <a href={url} target='_blank'>
              {title}
            </a>
          ) : (
            <Link to={postUrl}>{title}</Link>
          )}
        </Div>
        <Div css={{ fontWeight: 'light', fontSize: 12 }}>
          {voteScore || 0} points |{' '}
          <Link to={postUrl}>{comments.length} comments | </Link>
          Posted by {author.username} |{' '}
          {DateTime.fromISO(createdAt).toLocaleString()}
          {canDelete && (
            <DeleteButton
              onClick={() =>
                showDeleteConfirm(title, postId, deletePost, redirect)
              }
            >
              Delete
            </DeleteButton>
          )}
        </Div>
      </PostColumn>
    </Div>
  )
}

export default Post
