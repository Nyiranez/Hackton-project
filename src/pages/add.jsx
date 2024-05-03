import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Add = () => {
    let Navigate=useNavigate()
    const [title, setTile]= useState("")
    const [body, setBody]= useState("")
   
    let newone={title, body}
 const fetchedData=(()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts", newone).then((res)=>{
        console.log(res.data);
        alert("successfull added")
       
    }).catch((err)=>{
      console.log(err)
    })
    Navigate("/styling/crudfromAPIs")
 })
  return (
    <div>
        <input type="text" placeholder='title' onChange={(e)=>{
            setTile(e.target.value)
        }}></input>
          <input type="text" placeholder='body' onChange={(e)=>{
            setBody(e.target.value)
        }}></input>
          {/* <input type="text" onChange={(e)=>{
            setTile(e.target.value)
        }}></input> */}
        <button onClick={fetchedData} className='bg-black text-white px-4 py-2 font-bold'>Create</button>
    </div>
  )
}
