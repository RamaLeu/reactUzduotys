import React, { useState } from 'react'
import './Praktika1.css';

const Praktika1 = () => {
    let [complete, setComplete] = useState(false)
  return (
    <div className='task'>{!complete ? <h3 className='red'>Task is not done</h3>: <h3 className='green'>Task is done</h3>}
    {!complete &&<button onClick={()=>{setComplete(true)}}>Complete</button>}</div>
  )
}

export default Praktika1