import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"

const List = (props) => {
    const [bool,setBool]=useState(false)
    function   deleteFunc(){
          setBool(!bool)
          
    }
  return (
    <div className='flex  items-center h-full justify-between mx-3 py-3'>
        
          <li style={{textDecoration: bool ? "line-through" : "none"}}>{props.text}</li>
          <span><AiOutlineDelete className='flex items-center' onClick={deleteFunc}/></span>
    </div>
  )
}

export default List
