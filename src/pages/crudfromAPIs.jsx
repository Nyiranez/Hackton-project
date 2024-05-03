import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';



export const CrudfromAPIs = () => {
  const [data, setData] = useState([]);
  const fetchedData = (() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  })
  useEffect(() => {
    fetchedData();
  }, [])
  return (
    <div className='space-y-8'>
      <div className='flex- flex-col justify-end'><button className='bg-yellow-400 text-white font-bold ml-8 px-4 py-2'><NavLink to="/styling/add">Add New</NavLink></button></div>
      
      {data.map((data, index) => {
        return <div key={index} className='bg-blue-400 pl-8 '>
          {/* <p>{data.userId}</p> */}
          
            <p>Title : {data.title}</p>
            <p> Body :{data.body}</p>
            <button className='bg-yellow-200 text-black font-bold ml-8 px-4 py-2'>More</button>
          


        </div>
      })}
    </div>
  )
}
