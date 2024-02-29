const utils = require('../utils/utils.js')

module.exports = {
  posts: [],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    const newPost = {
      id: utils.generateRandomUUID(),
      title,
      description,
    }
    this.posts.push(newPost)
  },

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id)
  },
}
