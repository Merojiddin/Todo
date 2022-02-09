import { FETCH_POSTS_FALURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actions'

export const fetchData = () => {
  return async dispatch => {
    dispatch(FETCH_POSTS_REQUEST)
    try {
      fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(res => dispatch(FETCH_POSTS_SUCCESS(res)))
    } catch (error) {
      dispatch(FETCH_POSTS_FALURE(error))
    }
  }
}
