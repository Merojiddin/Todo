import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editData, deleteData, fetchData, postData } from '../redux/actions/requests';
import InputList from './InputList';
import './TodoList.css'


function TodoList() {

  const todos = useSelector(store => store.reducer)
  const dispatch = useDispatch()

  const [EditToggle, setEditToggle] = useState(false);
  const [editorId, setEditorId] = useState('')
  //const [todoInput, setTodoInput] = useState('');
  const myContainer = useRef(null);


  const addBtnHandler = (input) => {
    input !== '' ? dispatch(postData(input)) : console.log("It`s empty")
    dispatch(fetchData())
  }

  const delBtnHandler = (id) => {
    dispatch(deleteData(id))
    dispatch(fetchData())
    dispatch(fetchData())
  }

  const onCompleateHandler = (id, text, completed) => {
    dispatch(editData(id, text, !completed))
    dispatch(fetchData())
    dispatch(fetchData())
  }

  const editBtnHandler = (id) => {
    setEditToggle(true)
    setEditorId(id)
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const TodoListComponent = () => (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input type="text" id="form2" className="form-control" placeholder='Edit a Task...' ref={myContainer} />
        </div>
        <button type="submit" className="btn btn-info ms-2" onClick={() => addBtnHandler(myContainer.current.value)}>Add</button>
      </div>

      <div className='buttons d-flex justify-content-center mb-3 pb-3'>
        {/* <button className='btn btn-outline-dark me-2' onClick={() => setFilter(todos.items)}>All</button>
        <button className='btn btn-outline-dark me-2' onClick={() => filterProduct(false)}>Active</button>
        <button className='btn btn-outline-dark me-2' onClick={() => filterProduct(true)}>Compleated</button> */}
      </div>

      <div className="tab-content" id="ex1-content">
        <ul className="list-group mb-0">
          {todos.loading ? <h1>Loading .........</h1> : todos.items.map((todo) => (
            todo.completed ? (
              <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between" style={{ backgroundColor: '#f4f6f7', opacity: "50%" }} key={todo.id} >
                <div onClick={e => onCompleateHandler(todo.id, todo.text, todo.completed)} style={{ cursor: 'pointer' }} >
                  <s style={{ opacity: "50%" }}>{todo.text}</s>
                </div>
                <div>
                  <button className='btn me-1' onClick={() => editBtnHandler(todo.id)} disabled><i className="fa fa-pencil me-1" />Edit</button>
                  <button className='btn me-1' onClick={() => delBtnHandler(todo.id)} ><i className="fa fa-trash me-1"></i>Del</button>
                </div>
              </li>)
              : (
                <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between" style={{ backgroundColor: '#f4f6f7' }} key={todo.id}>
                  <div onClick={() => onCompleateHandler(todo.id, todo.text, todo.completed)} style={{ cursor: 'pointer' }} >
                    {todo.text}
                  </div>
                  <div>
                    <button className='btn me-1' onClick={() => editBtnHandler(todo.id)}><i className="fa fa-pencil me-1" />Edit</button>
                    <button className='btn me-1' onClick={() => delBtnHandler(todo.id)}><i className="fa fa-trash me-1"></i>Del</button>
                  </div>
                </li>)
          ))}
        </ul>
      </div>
    </div>
  )


  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card"></div>
            <div className="card-body p-5" style={{ backgroundColor: 'grey' }}>

              {EditToggle ? <InputList editorId={editorId} setEditToggle={setEditToggle} /> : <TodoListComponent />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodoList;
