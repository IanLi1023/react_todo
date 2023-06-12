import React from 'react'

function UpdateForm({updateData, cancelUpdate, changeTask, updateTask}) {
  return (
    <>
    <div className="row">
    <div className="col">
      <input
      className="form-control form-control-lg"
      value= { updateData && updateData.title }
      onChange={(e) => {changeTask(e)}}>
      </input>
    </div>
    <div className="col-auto"
    onClick={updateTask}>
      <button className="btn btn-lg btn-success mr-20">
        Update Task
      </button>
      <button 
      className="btn btn-lg btn-warning"
      onClick={cancelUpdate}>
        Cancel
      </button>
    </div>
    </div>
    <br/>
    </>
  )
}

export default UpdateForm