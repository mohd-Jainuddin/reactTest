import React from 'react'

function Todolist(props) {
  return (
    <>
      <div className="box">
        <li className="items">{props.value}</li>
        <div className="btn">
          <button className="btnDelete" onClick={()=>{props.sendFun(props.id)}}>Delete</button>
          <button className="btnEdit">Edit</button>
        </div>
      </div>
    </>
  );
}

export default Todolist
