export const FETCH_POSTS_REQUEST = {
  type: "FETCH_POSTS_REQUEST",
  payload: []
}
export const FETCH_POSTS_SUCCESS = (response) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: response
  }
}
export const FETCH_POSTS_FALURE = (error) => {
  return {
    type: "FETCH_POSTS_FALURE",
    payload: error
  }
}

