import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Add = () => {
  const [fullName, setFullName]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")
  const navigate= useNavigate()
  const addcontact=(()=>{
    let newcontact={fullName,email, phone }
    axios.post('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/add',newcontact).then((res)=>{
     console.log(res.data);
     navigate("/styling/crudfromAPIs")
    }).catch((err)=>{
      console.log(err)
    })
  })

  return (
    <div>
        <div>
          <input type="text" placeholder='name' required className='border-2 border-black' onChange={(e)=>{
            setFullName(e.target.value);
          }}></input><br></br>
          <input type="text" placeholder='email' required className='border-2 border-black mt-4' onChange={(e)=>{
            setEmail(e.target.value);
          }}></input><br></br>
          <input type="text" placeholder='phone' required className='border-2 border-black mt-4' onChange={(e)=>{
            setPhone(e.target.value);
          }}></input><br></br>
          <button className='bg-green-400 px-4 py-2 text-white mt-4' onClick={addcontact}>Add</button>
        </div>
    </div>
  )
}
