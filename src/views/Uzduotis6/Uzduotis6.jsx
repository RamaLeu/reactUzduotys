import React, { useState } from 'react'
import Card from '../Uzduotis5/Card'
import TodoCard from './TodoCard'
import './Uzduotis6.css';

const Uzduotis6 = () => {
    let [todos, setTodos] = useState([
        "Make a cake", "Eat a cake", "Forget the cake"
    ])

    function deleteTodo(index){
        let tempTodos = [...todos];
        tempTodos.splice(index, 1)
        setTodos(tempTodos)
    }
  return (
    <div className='Uzduotis6'>
        {todos.map((todo, index)=>(
            <TodoCard todo={todo} index={index} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}

export default Uzduotis6