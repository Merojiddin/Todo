import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editData, fetchData } from '../redux/actions/requests';

function InputList({ editorId, setEditToggle }) {

  const todos = useSelector(store => store.reducer)
  const dispatch = useDispatch()

  const [text, setText] = useState('');

  const EditBtnHandler = (id, text) => {
    if (text === '') {
      alert("Edited text can`t be empty")
      return
    } else {
      dispatch(editData(id, text))
      setEditToggle(false)
      dispatch(fetchData())
    }
    return
  }
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input type="text" id="form2" className="form-control" placeholder='Edit a Task...' onChange={e => setText(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-info ms-2" onClick={() => EditBtnHandler(editorId, text)}>Edit</button>
      </div>

      <div className="list-group-item d-flex border-3 mb-4 rounded justify-content-center" style={{ backgroundColor: '#f4f6f7' }}>
        <div >
          {todos.loading ? <h1>Loading....</h1> : todos.items.map((todo) => (
            todo.id === editorId ? <h1 key={todo.id}>{todo.text}</h1> : console.log()
          ))}
        </div>
      </div>
    </div>
  );
}

export default InputList;
