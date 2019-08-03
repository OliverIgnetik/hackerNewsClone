const express = require('express')

const User = require('../models/user')
// helper methods from jwt
const { signJwt, verifyJwt } = require('../services/jwt')

// set up api/auth
const router = express.Router()

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body

  if (username && password) {
    const userData = {
      username,
      password,
      // don't do this in production 
      // maybe use a check on the email
      role: username === 'admin' ? 'admin' : 'user'
    }
    // does the user exist
    return User.count({ username })
    // create a promise that is executable hence its thenable :) 
      .exec()
      // use then to run once promise is resolved
      .then(num => {
        if (num > 0) {
          const error = new Error('Duplicate user')
          error.status = 400
          return next(error)
        }
        // quicker then creating a new user and then calling user.save()
        User.create(userData, (err, user) => {
          if (err) {
            return next(err)
          }
          const token = signJwt(user)
          res.json({
            success: true,
            user,
            token
          })
        })
      })
      // throw the error to the error handler
      .catch(next)
  }

  const error = new Error('All fields required')
  error.status = 400
  return next(error)
})

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  if (username && password) {
    return User.authenticate(username, password, (error, user) => {
      if (error) {
        return next(error)
      }

      if (!user) {
        const error = new Error('Wrong username or password')
        error.status = 401
        return next(error)
      }
      // successful login assign a token with signJwt
      const token = signJwt(user)
      return res.json({
        success: true,
        token,
        user
      })
    })
  }

  const error = new Error('All fields required')
  error.status = 400
  return next(error)
})

router.get('/', (req, res) => {
  const bearer = req.headers.authorization
  if (!bearer) {
    return res.status(401).send('Missing Auth Header')
  }
  const token = bearer.trim().split(' ')[1]
  verifyJwt(token, (err, user) => {
    if (err) {
      res.status(401).send({ success: false, message: 'Authentication failed' })
    }
    return res.json({ success: true, user })
  })
})

module.exports = router
