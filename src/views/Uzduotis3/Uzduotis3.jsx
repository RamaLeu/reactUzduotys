import React, {useState} from 'react'
import './Uzduotis3.css';

const Uzduotis3 = () => {
    let [likes, setLikes] = useState(0);
    let [dislikes, setDislikes] = useState(0)
  return (
    <div className='uzduotis3'>
        <h2>Postas su likes</h2>
        <img src={"https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?fit=400%2C267&ssl=1"}></img>
        <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eveniet quos libero perferendis magnam, non voluptatibus temporibus dolorum eaque! Non quibusdam doloremque quia ipsam sed repellat dolorum quisquam id eius!</a>
        <div className='uzd3btns'><button onClick={()=>{setLikes(likes + 1)}}>Like: {likes}</button><button onClick={()=>{setDislikes(dislikes + 1)}}>Hate: {dislikes}</button><button onClick={()=>{setLikes(0); setDislikes(0)}}>Reset</button></div>
    </div>
  )
}

export default Uzduotis3