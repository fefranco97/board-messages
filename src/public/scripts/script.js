const PathUrl = 'http://localhost:3000/api'

document.addEventListener('DOMContentLoaded', () => {
  updatePosts()
})

function updatePosts() {
  const url = PathUrl + '/posts'
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let postElements = ''
      let posts = JSON.parse(data)

      posts.forEach((post) => {
        let postElement = `
        <div id=${post.id} class="card mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title">${post.title}</h5>
                <i class="bi bi-trash-fill"></i>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`
        postElements += postElement
      })

      document.querySelector('#posts').innerHTML = postElements

      let IElementArray = document.getElementsByTagName('i')
      if (IElementArray.length > 0) {
        for (const element of IElementArray) {
          element.addEventListener('click', () => {
            const parentElementId = element.parentElement.parentElement.id
            deletePost(parentElementId)
          })
        }
      }
    })
}

function newPost() {
  const url = PathUrl + '/newPost'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: document.querySelector('#title').value,
      description: document.querySelector('#description').value,
    }),
  }

  fetch(url, options).then((resp) => {
    updatePosts()
    document.querySelector('#title').value = ''
    document.querySelector('#description').value = ''
  })
}

function deletePost(id) {
  const url = PathUrl + '/deletePost/' + id
  const options = {
    method: 'DELETE',
  }

  fetch(url, options).then((resp) => {
    updatePosts()
  })
}
