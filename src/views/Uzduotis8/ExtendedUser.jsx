import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {
    Link
  } from "react-router-dom";

const ExtendedUser = (props) => {
    const {login} = useParams();
    let [isLoading, setIsLoading] = useState(true)
    let [users, setUsers]=useState(props.users)
    let [user, setUser] = useState("")

    useEffect(() => {
        users.map((user)=>{
            if (login === user.login){
                setUser(user)
                setIsLoading(false)
            }
        })
    }, [users])
    
  return (
    <div className="u8Card">
        {!isLoading &&
        <div>
                <img src={user.avatar_url}></img>
               <h2>{login}</h2>
               <h5>ID: {user.id}</h5>
                <h5>node_id: {user.node_id}</h5>
                <h5>type: {user.type}</h5>
                <p>{user.html_url}</p>
                <h4><Link to={`/`}>Back</Link></h4>
            </div>
        }
    </div>
  )
}

export default ExtendedUser