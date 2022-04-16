import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import './Uzduotis8.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Users from './Users';
import ExtendedUser from './ExtendedUser';

const Uzduotis8 = () => {
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
    <div className='Uzduotis8'>
        <Router>
        <Routes>
        <Route path="/" element={<Users/>}>
        </Route>
        <Route path="/users/:login" element={<ExtendedUser users={users}/>}>
        </Route>
        </Routes>
    </Router>
    </div>
  )
}

export default Uzduotis8