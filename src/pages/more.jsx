import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const More = () => {
    const { contId } = useParams()
    const [contact, setContact] = useState();
    const navigate= useNavigate();


    const fetchcontact = ((id) => {
        axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id).then((res) => {
            setContact(res.data.contact)
            console.log(res.data.contact)
        })
    });

    const deleteContact=((id)=>{
   axios.delete("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id).then((res)=>{
    console.log(res.data)
    fetchcontact();
    navigate("/");
   })
    });
    useEffect(() => {
        fetchcontact(contId)
    }, [contId])
    return (
        <div>
            <p>{contact? contact.fullName: "loading..."}</p>
            <p>{contact? contact.email: "loading..."}</p>
            <p>{contact? contact.phone: "loading..."}</p>
            <p>{contact? contact.createdAt: "loading..."}</p>
            <button className='bg-red-900 px-4 py-2 text-white'><Link to={`/update/${contId}`}>Update</Link></button>
            <button className='bg-yellow-600 px-4 py-2 text-white' onClick={()=>deleteContact(contId)}>Delete</button>
        </div>
    )
}
