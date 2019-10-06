const testRouter = require('express').Router()

const User = require('../models/User')
const Blog = require('../models/Blog')
const Comment = require('../models/Comment')

testRouter.post('/reset', async (req, res) => {
  await User.deleteMany({})
  await Blog.deleteMany({})
  await Comment.deleteMany({})
  res.status(204).end()
})

module.exports = testRouter

