import React from 'react'
import { useState } from 'react';
import { FaUser } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import feedData from '../data/feed'
const Feed = () => {
    const [toggle, setToggle] = useState(feedData)
    const toggleLike = (id) => {
        const newObj = toggle.map(toggle => {
            if (toggle.id === id) {
                return !toggle.isToggle
            } else {
                toggle
            }
        })
        setToggle(...toggle, newObj)
    }
    console.log(
        !toggle.isToggle
    )
    return (
        <div className='bg-white px-4 py-7 flex flex-col gap-8'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Community Feed</h1>
                <p className='text-sm text-gray-600'>"Stay connected with your hoemtown community."</p>
            </div>
            <section>
                <div className='flex flex-col justify-center gap-5 items-center max-w-5xl w-full'>
                    {toggle.map((post) => {
                        return <div key={post.id} className='px-5 py-5 bg-slate-50 max-w-5xl w-full shadow-lg rounded-md '>
                            <div className='flex justify-between'>

                                <h2 className='flex gap-2 text-lg font-semibold'><FaUser className='mt-1 text-black' />{post.author}</h2>

                                <p className=' text-sm text-gray-500'>{post.time}</p>
                            </div>
                            <p>{post.community}</p>
                            <p>{post.content}</p>gg
                            <img className='max-w-sm w-full rounded-lg' src={post.image} alt={post.community} />
                            <div>
                                <span><FaHeart onClick={() => toggleLike(post.id)} className={`${post.isToggle === true ? "text-red-600" : "text-white"} `} /></span>

                                <span>{post.likes}</span>

                                <span>comments</span>
                            </div>
                        </div>
                    })}
                </div>
            </section>

        </div>
    )
}

export default Feed
