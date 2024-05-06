import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Styling = () => {
  return (
    <div>
        <div className='  space-x-4 mt-12  flex flex-row justify-center'>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/crudfromAPIs">CRUDfromAPIs</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/datadisplay">DataDisplay</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/datamanipulation">DataManipulation</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/dataselection">DataSelection</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/forms">Forms</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/imagehandling">ImageHandling</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/reacthooks">ReactHooks</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/reactRouterDOM">ReactRouterDOM</NavLink></button>
            <button className='border-2 border-black bg-blue-600 text-white px-4 py-2'><NavLink to="/styling/statepropagation">StatePropagation</NavLink></button>
        </div>
        <div className='mt-12'> <Outlet/></div>
       
    </div>
  )
}
