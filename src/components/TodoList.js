import React from 'react';
import './TodoList.css'

function TodoList() {

  const compleateHandler = () => {

  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5" style={{ backgroundColor: 'grey', opocity: "90%" }}>

                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form2" className="form-control" placeholder='Enter a Task...' />
                  </div>
                  <button type="submit" className="btn btn-info ms-2">Add</button>
                </form>

                {/* <!-- Tabs navs --> */}
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                  <button className='btn btn-outline-dark me-2' onClick={() => console.log("All")}>All</button>
                  <button className='btn btn-outline-dark me-2' onClick={() => console.log("women's clothing")}>Active</button>
                  <button className='btn btn-outline-dark me-2' onClick={() => console.log("jewelery")}>Compleated</button>
                </div>
                {/* <!-- Tabs navs --> */}

                {/* <!-- Tabs content --> */}
                <div className="tab-content" id="ex1-content">
                  <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <ul className="list-group mb-0">
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between" style={{ backgroundColor: '#f4f6f7' }}>
                        <div>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                          Some Crap to do
                        </div>
                        <div>
                          <button className='btn me-1' onClick={() => console.log("Edit")}><i className="fa fa-pencil me-1" />Edit</button>
                          <button className='btn me-1' onClick={() => console.log("Del")}><i className="fa fa-trash me-1"></i>Del</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Tabs content --> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  )


}

export default TodoList;
