import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const UserCard = ({user}) => {
    let [isExtended, setIsExtended] = useState(false)
  return (
    <div class="u8Card">
        <img src={user.avatar_url} className="userImg" alt='userImg'></img>
        <h2>{user.login}</h2>
        <p>{user.html_url}</p>
        <h4><Link to={`/users/${user.login}`}>Extended Details</Link></h4>
        {isExtended &&
        <div>
            <h5>ID: {user.id}</h5>
            <h5>node_id: {user.node_id}</h5>
            <h5>type: {user.type}</h5>

        </div>}
    </div>
  )
}

export default UserCard