import { FETCH_POSTS_FALURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actions'

const URL = 'http://localhost:3001/todos'

export const fetchData = () => {
  return async dispatch => {
    dispatch(FETCH_POSTS_REQUEST)
    try {
      fetch(URL)
        .then(response => response.json())
        .then(res => dispatch(FETCH_POSTS_SUCCESS(res)))
    } catch (error) {
      dispatch(FETCH_POSTS_FALURE(error))
    }
  }
}

export const postData = (input) => {
  return async dispatch => {
    try {
      fetch(URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, completed: false })
      })
    } catch (error) {
      dispatch(FETCH_POSTS_FALURE(error))
    }
  }
}

export const deleteData = (id) => {
  return async dispatch => {
    try {
      fetch(`${URL}/${id}`, { method: "DELETE" })
    } catch (error) {
      dispatch(FETCH_POSTS_FALURE(error))
    }
  }
}

export const editData = (id, text, completed = false) => {
  return async dispatch => {
    try {
      fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text, completed: completed })
      })
    } catch (error) {
      dispatch(FETCH_POSTS_FALURE(error))
    }
  }
}