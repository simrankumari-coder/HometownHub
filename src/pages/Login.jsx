import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandsClapping } from "react-icons/fa6";
const Login = () => {
    const [input, setInput] = useState(() => {
        let data = localStorage.getItem("username")
        return data ? JSON.parse(data) : ""
    })
    const [password, setPassword] = useState(() => {
        let data = localStorage.getItem("password")
        return data ? JSON.parse(data) : ""
    })

    useEffect(() => {
        localStorage.setItem(JSON.stringify("username"))
    }, [username])
    useEffect(() => {
        localStorage.setItem(JSON.stringify("password"))
    }, [password])


    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const isDisabled = (input === '' || password === '');
    return (
        <div className='bg-slate-50'>
            <div className=' flex flex-col justify-center items-center px-4'>

                <h2 className='mt-4 justify-center items-center flex gap-2 text-2xl md:text-4xl text-blue-900 font-bold'>Welcome Back <FaHandsClapping className='mt-2' /></h2>
                <p className='text-xl font-semibold  text-gray-600'>SignIn to HometownHub</p>
            </div>
            <form className=' mb-4 w-full bg-white mx-auto max-w-md  shadow-lg rounded-xl p-8 flex flex-col gap-5 font-semibold items-center justify-center  h-auto mt-4 '>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Username:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' type="text" value={input} onChange={handleInput} placeholder='Enter your username' />
                    {(input.length < 2 && input != "") && <span>Username must has atleast two characters</span>}
                </label>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Password:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' placeholder='Enter your Password' type='password' value={password} onChange={handlePass} />
                    {(password.length > 6 && password != "") && <span>Password is only six digits</span>}
                </label>
                <div className='flex gap-3 mt-2'>
                    <label className='flex gap-2  font-medium text-slate-700'>
                        <input type="checkbox" className='mt-1' />
                        Remember Me
                    </label>
                    <h3 className=' font-medium text-slate-700'>Forget Password?</h3>
                </div>
                <button disabled={isDisabled} className='mt-3 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition'>Sign In</button>
                {isDisabled}
                <div className='border-t border-slate-200 w-full flex flex-col justify-center items-center'>
                    <h2>Don't have an account?</h2>
                    <Link to='/register'>
                        <h2 className='font-medium text-slate-700'>Register</h2>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login
