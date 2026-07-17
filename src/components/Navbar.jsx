import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHomeModern } from "react-icons/hi2";
import { FcSearch } from "react-icons/fc";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className='relative w-full h-14 bg-blue-900'>
            <div className='flex justify-between px-3 py-4 items-center '>
                <div className='flex gap-1'>
                    <span className='text-white'><HiHomeModern className=' text-white text-2xl' /></span>
                    <span className='text-white  font-bold   tracking-wide text-xl'>HometownHub</span>
                </div>
                {/* desktop links */}
                <div className='lg:flex gap-44  hidden'>
                    <div className='text-sm flex gap-6 text-white'>
                        <NavLink className=' hover:bg-blue-700 p-1 rounded-md transition' to='/'>Home</NavLink>
                        <NavLink className=' hover:bg-blue-700 p-1 rounded-md transition' to='/communities'>Communities</NavLink>
                        <NavLink className=' hover:bg-blue-700 p-1 rounded-md transition' to='/events'>Events</NavLink>
                        <NavLink className=' hover:bg-blue-700 p-1 rounded-md transition' to='/feed'>Feed</NavLink>
                    </div>
                    <div className='flex gap-5 text-sm  text-white'>

                        <input className='border rounded-full outline-none px-2' placeholder='search' />
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </div>
                </div>
                <div className='lg:hidden flex px-2 gap-3'>

                    <button onClick={() => setMenu(!menu)} className='lg:hidden text-white' >{menu ? "" : <FcSearch className='text-xl text-white' />}</button>
                    <button onClick={() => setMenu(!menu)} className='lg:hidden text-white '>{menu ? <FaTimes className='text-xl text-white' /> : <FaBars className='text-xl text-white' />}</button>
                </div>
            </div>

            {menu && (
                <div className='lg:hidden absoulte top-full w-full z-50 rounded-b-xl rounded-xl shadow-lg bg-blue-800 text-white text-sm left-0 flex flex-col p-4'>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/'>Home</NavLink>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/communities'>Communities</NavLink>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/events'>Events</NavLink>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/feed'>Feed</NavLink>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/login'>Login</NavLink>
                    <NavLink className='px-4 py-1 hover:bg-blue-700 rounded-md transition' to='/register'>Register</NavLink>

                </div>
            )}
        </nav >
    )
}

export default Navbar
