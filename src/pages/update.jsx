import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Update = () => {
    const {contupId}= useParams()
 let navigate= useNavigate()
    const [fullName, setFullName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
const geteContact=(id)=>{
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id).then((res)=>{
      // setContacts(res.data)
      console.log(res.data)
      setFullName(res.data.contact.fullName)
      setEmail(res.data.contact.email)
      setPhone(res.data.contact.phone)
    })
}
const updateContact=((id)=>{
  let newContact={fullName, email, phone}
  axios.put(`https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/update?id=${id}`, newContact).then((res)=>{
    console.log(res.data)
    alert("successful updated");
     navigate(`/update/${id}`); 
  })
})

useEffect(()=>{
geteContact(contupId);
},[contupId])
  return (
    <div>
      <div className='space-y-4'>
        <input type='text' value={fullName} onChange={(e)=>{setFullName(e.target.value)}} className='border-2 border-black'></input><br></br>
        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='border-2 border-black'></input><br></br>
        <input type='text' value={phone} onChange={(e)=>{setPhone(e.target.value)}} className='border-2 border-black'></input><br></br>
      </div>
      <button className='bg-black text-white px-4 py-2 mt-4' onClick={()=> updateContact(contupId)}>Save changes</button>
     <button className='bg-green-500 text-white px-4 py-2 mt-4'><Link to="/styling/crudfromAPIs">back home</Link></button> 
    </div>
  )
}
