import React, {useState} from 'react'
import './Uzduotis4.css';

const Uzduotis4 = () => {
    let [string, setString] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to")
    let [isReadMore, setIsReadMore] = useState(false)
  return (
    <div className='uzduotis4'>
        {!isReadMore ? string.substring(1, 30) : string}
        <a href="#"onClick={()=>{setIsReadMore(!isReadMore)}}>{isReadMore ? " Read less": "...Read More"}</a>
    </div>
  )
}

export default Uzduotis4