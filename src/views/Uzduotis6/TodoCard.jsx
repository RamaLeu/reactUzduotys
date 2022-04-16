import React, { useState } from 'react'

const TodoCard = (props) => {
    let [status, setStatus]= useState("not done")
  return (
    <div>
        <h4>{props.todo}, status: {status}</h4>
        <button onClick={()=>{setStatus("done")}}>Done</button>
        <button onClick={()=>{props.deleteTodo(props.index)}}>Delete</button>
    </div>
  )
}

export default TodoCard