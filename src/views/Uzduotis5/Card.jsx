import React, { useState } from 'react'

const Card = (props) => {
    let [status, setStatus] =useState("Mokausi")
  return (
    <div className='Card'>
        <h2>{props.title}</h2>
        <h4>{status}</h4>
        <button onClick={()=>{setStatus("Išmokau")}}>OK</button>
    </div>
  )
}

export default Card