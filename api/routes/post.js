const express = require('express')
const router = express.Router()

const { removeEl } = require('./../util')
const Post = require('../models/post')
const User = require('../models/user')
const { authJwt } = require('../services/jwt')

router.get('/', (req, res, next) => {
  // find all the posts
  Post.find({})
  // get the author whose id matches the post id and 
  // return the author object
    .populate('author')
    // Comments are nested, point to the comment and
    // then populate using the author
    .populate({
      path: 'comments',
      populate: {
        path: 'author'
      }
    })
    .exec()
    // return the post once succesfull
    .then(posts => res.json({ success: true, posts }))
    .catch(next)
})

// get a specific post
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Post.findById(id)
    .populate('author')
    .populate({
      path: 'comments',
      populate: {
        path: 'author'
      }
    })
    .exec()
    .then(post => {
      if (!post) return next(`Cannot find post ${id}`)
      return res.json({ success: true, post })
    })
    .catch(next)
})

// get all the comments for a particular post
router.get('/:id/comments', (req, res, next) => {
  const { id } = req.params
  Post.findById(id)
    .populate({
      path: 'comments',
      populate: {
        path: 'author'
      }
    })
    .exec()
    // destructure on the returned post object
    .then(({ comments }) => res.json({ success: true, comments }))
    .catch(next)
})

// root post route, make a new post
// authJwt middleware to check for auth token
router.post('/', authJwt, (req, res, next) => {
  const { title, url, text } = req.body
  const { userId } = req.decoded
  const postData = { title, author: userId }
  // hackerNews functionality
  if (text) {
    postData.text = text
  }
  if (url) {
    postData.url = url
    delete postData.text
  }
  // create the post
  Post.create(postData, (err, post) => {
    if (err) {
      return next(err)
    }
    // push the new post id to the users post array
    User.findById(userId)
      .exec()
      .then(user => {
        user.posts.push(post._id)
        user.save()
        res.json({
          success: true,
          post
        })
      })
  })
})

// only admins or authors are allowed to delete posts
router.delete('/:id', authJwt, (req, res, next) => {
  const { id } = req.params
  const { userId, role } = req.decoded
  Post.findById(id)
    .exec()
    .then(post => {
      if (role !== 'admin' && userId !== String(post.author)) {
        return next('Unauthorized to do this')
      }

      post
      // remove the post
        .remove()
        .then(() => {
          User.findById(post.author)
            .exec()
            .then(user => {
              // remove the post from the users post array
              user.posts = removeEl(user.posts, post._id)
              user.save()
              res.json({ success: true })
            })
        })
        .catch(next)
    })
    .catch(next)
})

// upvote route requires authJwt token
router.post('/:id/upvote', authJwt, (req, res, next) => {
  const { id } = req.params
  const { userId } = req.decoded

  Post.findById(id)
    .exec()
    .then(post => {
      // check for two votes 
      if (post.upVotes.includes(userId)) {
        return next('Cannot vote twice on the same item')
      }
      // push the userId to the upvotes array of the post
      post.upVotes.push(userId)
      post.downVotes = removeEl(post.downVotes, userId)
      // save the post after the modification
      post.save()
      res.json({
        success: true,
        post
      })
    })
    .catch(next)
})

// downvote
router.post('/:id/downvote', authJwt, (req, res, next) => {
  const { id } = req.params
  const { userId } = req.decoded

  Post.findById(id)
    .exec()
    .then(post => {
      if (post.downVotes.includes(userId)) {
        return next('Cannot vote twice on the same item')
      }
      // if you downvote the post you have to remove the userId from the upvote
      post.downVotes.push(userId)
      post.upVotes = removeEl(post.upVotes, userId)

      post.save()
      res.json({
        success: true,
        post
      })
    })
    .catch(next)
})

module.exports = router
