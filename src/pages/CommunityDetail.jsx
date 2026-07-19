import React from 'react'
import communities from '../data/communties'
import Communities from './Communities'

import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { MdGavel } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { useParams } from 'react-router-dom'
const CommunityDetail = () => {
    const { id } = useParams()


    const community = communities.find((community, index) => {
        return community.id === Number(id)
    })

    const Logo = community.logo;
    return (
        <div className='bg-slate-50 min-h-screen'>
            <div className=' bg-no-repeat h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80  bg-cover bg-center' style={{ backgroundImage: `url(${community.image})` }}> </div>
            <hr className='my-4 border-t border-slate-300' />
            <div className='max-w-6xl mx-auto px-12 py-8 flex flex-col gap-5'>
                <div className='flex justify-center items-center mt-4 bg-white shadow-md   w-full max-w-5xl rounded-xl'>
                    <div className='flex flex-col gap-6 justify-center items-center p-6'>
                        <div className='bg-white w-14 h-14 shadow-lg md:h-16 md:w-16 lg:w-20 lg:h-20 rounded-full flex justify-center items-center'>


                            <Logo className='text-6xl text-blue-600 p-2' />
                        </div>

                        <div className='flex flex-col  gap-3'>
                            <h2 className='text-2xl md:text-4xl font-bold text-blue-900'>{community.name}</h2>
                            <div className='flex justify-center items-center gap-4'>
                                <p className='text-sm text-gray-500 flex gap-2'><FaTag className='mt-1' />{community.category}</p>
                                <p className='text-sm text-gray-500 flex gap-2'><FaUsers className='mt-1' />{community.members} </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>

                            <button className='bg-blue-600 text-white duration-300 hover:bg-blue-700 font-semibold rounded-md p-2'>Join Community</button>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col gap-2 bg-white shadow-md w-full rounded-xl  w-full max-w-5xl p-4 '>
                    <h2 className='text-2xl md:text-4xl flex gap-2 font-bold text-blue-900'><BiBook className='mt-1' />About Community</h2>
                    <p className='text-slate-600 text-base max-w-3xl'>{community.about}</p>
                </div>

                <div className=' w-full max-w-5xl p-2 bg-white shadow-md rounded-xl flex flex-col gap-2 rounded-md p-4'>
                    <h2 className='text-2xl md:text-4xl flex gap-2 font-bold text-blue-900'><MdGavel className='mt-1' />Community Rules</h2>

                    <ul className='text-slate-600 text-base flex flex-col gap-2 max-w-3xl'>
                        {community.rules.map((rule, index) => {
                            return <li className='flex gap-2' key={index}><FaCheckCircle className='mt-1 text-blue-400' />{rule}</li>
                        })}

                    </ul>
                </div>

                <div className='bg-white shadow-md rounded-xl max-w-5xl w-full  shadow-lg p-2 flex flex-col gap-2 '>
                    <h2 className='text-2xl md:text-4xl flex gap-2 font-bold text-blue-900'><MdEvent className='mt-1' />Upcoming Events</h2>
                    <div className='grid mt-4 gap-2 grid-cols-1 md:grid-cols-3 '>
                        {community.events.map((event) => {
                            return < div key={event.id} className='shadow-lg hover:-translate-y-2 hover-shadow-xl duration-300 trantision bg-slate-50 rounded-xl p-3 flex flex-col gap-2 bg-white' >

                                <img className='w-full sm:40 md:h-60 lg:h-40 object-cover rounded-lg' src={event.image} alt='event image' />

                                <h2 className='text-slate-900 font-bold text-xl'>{event.title}</h2>
                                <div>
                                    <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaCalendarAlt className='mt-1' />{event.date}</p>
                                    <p className='text-gray-800 font-medium text-sm flex gap-2 '><FaClock className='mt-1' />{event.time}</p>
                                    <p className='text-b
                                    lack font-medium text-sm flex gap-2 '><FaLocationDot className='mt-1' /><span className=''>{event.location}</span></p></div>
                                <p className='text-blue-700 flex gap-1'><FaUsers className='mt-1' />{event.attendees}{" "}Attendees</p>

                                <button className='font-semibold bg-blue-600 text-white duration-300 hover:bg-blue-700 rounded-md p-2'>Join Event</button>
                            </div>
                        })}
                    </div>
                </div>
                <div className=' w-full shadow-lg max-w-5xl w-full p-2 flex flex-col gap-2 bg-white shadow-md rounded-xl'>
                    <h2 className='text-2xl md:text-4xl flex gap-2 font-bold text-blue-900'><BsFilePost className='mt-1' />Recents Posts</h2>
                    <p className='text-sm  text-slate-600'>Stay updated with the latest discussions and announcements</p>
                    <div className='flex flex-col gap-5 mt-2'>
                        {community.posts.map((post) => {
                            return <div key={post.id} className='max-w-4xl mx-auto w-full shadow-lg hover:-translate-y-2 hover-shadow-xl duration-300 transition bg-slate-50 rounded-xl p-5 flex flex-col gap-6 bg-white'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='flex gap-2 text-lg font-semibold'><FaRegUserCircle className='mt-1 text-black' />{post.author}</h2>
                                    <p className=' text-sm text-gray-500'>{post.time}</p>
                                </div>
                                <p className='text-slate-600 leading-7 mt-4'>{post.content}</p>
                                <div className='flex gap-4 pt-4 mt-5 border-t border-slate-200 text-black'>
                                    <p className='flex gap-2'><FaHeart className='text-red-600 mt-1' />{post.likes}</p>
                                    <p className='flex gap-2'><FaCommentDots className='text-black mt-1' />{post.comments}</p>
                                </div>

                            </div>
                        })}
                    </div>

                </div>
            </div>
        </div >

    )
}

export default CommunityDetail







