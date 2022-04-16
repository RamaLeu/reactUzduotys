import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import './Uzduotis8.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Users = () => {
    let [users, setUsers] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            setUsers(data)
            console.log(data)
        });
    }, [])
    
    
  return (
    <div className='u8Users'>
        {!isLoading && users.map((user, index)=>(
            index <= 7  && <UserCard user={user}/>
        ))}
    </div>
  )
}

export default Users