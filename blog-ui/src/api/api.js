
const base_url="https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/"

export function getPosts() {
    const url = `${base_url}posts`
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("error in fetching"));
  }

  export function getPostbyId(id) {
    const url = `${base_url}posts/${id}`
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("error in fetching"));
  }

  export function getComment(id) {
    const url = `${base_url}posts/${id}/comments/`
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("error in fetching"));
  }


  export function getAuthorsbyId(id) {
    const url = `${base_url}authors/${id}`
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("error in fetching"));
  }