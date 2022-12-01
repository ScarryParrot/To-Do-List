import React from 'react'
import { useState } from 'react'

import List from './List'

const Main = () => {
    const [write, setWrite]=useState("")
    const [arr, setArr]=useState([])
    function onAdd(){
       setArr((e)=>{
         return [...e,write ]
       })
      setWrite(" ")
    }
  return (
    <div>
      <div className="bg-yellow-600 h-screen flex justify-center items-center">
        <div className="h-[80vh]  shadow-black shadow-2xl border-1 overflow-x-scroll  overflow-y-auto border-blue-900 rounded-md max-w-xs m-auto bg-green-900  text-white p-4">
            <p className='text-center p-3 font-bold text-xl'>To-Do List</p>
            <h6 className='flex justify-center text-xs'>Scroll to get Full List</h6>
            <div className="flex justify-between py-6">
                <input type="text" name="items" value={write} onChange={(e)=>(setWrite(e.target.value))}  className='rounded justify-center items-center bg-black p-2' placeholder='Write here..'/>
                <button className='rounded p-2 bg-yellow-400 text-black mx-4' onClick={onAdd}>Add</button>
            </div>
            <ul className='py-5'>
                      {arr.map((e) => (<li><List text={e}/></li>))
                         
                      }
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
