import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const CrudfromAPIs = () => {

    const [contact, setContact] = useState([])

    const fetchcontact = () => {
        axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list").then((res) => {
            setContact(res.data.contacts);
            console.log(res.data.contacts);
        }).catch((err)=>{
            console.log(err)
        });
    }

    useEffect(()=>{
        fetchcontact();
    }, []);
    return (
        <div  className='flex flex-col justify-center items-center'>
            <div className='space-y-4  w-7/12'>
            <button className='bg-green-600 px-4 py-2 text-black mb-4'><Link to="/add">AddNew</Link></button>
            {contact.map((name,index) => {
                return <div key={index} >
                    <div className='bg-slate-400 space-y-4 justify-around flex flex-row '>
                        <p>{name.fullName}</p>
                        <p>{name.email}</p>
                        <p>{name.phone}</p>
                        <button className='bg-green-900 px-4 py-2 text-white'><Link to={`/more/${name._id}`}>view</Link></button></div>
                </div>
            })}
            </div>
          
        </div>
    )
}

