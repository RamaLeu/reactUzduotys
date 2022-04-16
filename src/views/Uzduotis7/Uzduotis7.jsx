import React, { useEffect, useState } from 'react'
import './Uzduotis7.css';

const Uzduotis7 = () => {
    let [users, setUsers] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            setUsers(data)});
    }, [])
    
  return (
    <div className='Uzduotis7'>
        <h1>API fetch su "/users"</h1><h5>{!isLoading && users[0].username}</h5>
    <h5>{!isLoading && users[1].username}</h5>
    <h5>{!isLoading && users[2].username}</h5>
    <h5>{!isLoading && users[2].username}</h5>
    </div>
  )
}

export default Uzduotis7