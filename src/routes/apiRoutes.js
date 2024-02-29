const express = require('express')
const posts = require('../model/post.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = express.Router()

const corsOptions = {
  origin: 'http://localhost:3000',
}

router.use(cors(corsOptions))

router.get('/posts', (req, res) => {
  res.json(JSON.stringify(posts.getAll()))
})

router.post('/newPost', bodyParser.json(), (req, res) => {
  const title = req.body.title
  const description = req.body.description

  posts.newPost(title, description)

  res.send('Post adicionado')
})

router.delete('/deletePost/:id', (req, res) => {
  const id = req.params['id']
  posts.deletePost(id)
  res.send('Post Deletado')
})

module.exports = router
