import React from 'react'
import { useParams } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import events from '../data/events';
const EventDetail = () => {
    const { id } = useParams();
    const event = events.find((event) => {
        return event.id === Number(id)
    })
    return (
        <div className='bg-slate-50 min-h-screen'>
            <div className=' bg-no-repeat h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80  bg-cover bg-center' style={{ backgroundImage: `url(${event.image})` }}> </div>
            <hr className='my-4 border-t border-slate-300' />
            <div className='max-w-6xl mx-auto px-3 md:-px-12 py-8 flex flex-col gap-4'>
                <section className='max-w-5xl w-full mx-auto bg-white px-3 md:px-12 py-6 flex flex-col gap-3 rounded-md'>
                    <h2 className='text-slate-900 font-bold text-xl md:text-4xl'>{event.name}</h2>
                    <span className='w-full md:w-22 inline-block px-4 py-1 bg-blue-100 text-sm  text-blue-700 font-medium rounded-full'>{event.category}</span>
                    <p className='text-gray-500 text-sm '>Join this event to connect with people in your community, learn new skills, build meaningful relationships, and create memorable experiences. Everyone is welcome to participate and enjoy the event <togehter className="Q">   </togehter></p>
                    <button className='w-full md:w-1/4 bg-blue-700 text-white duration-300 hover:bg-blue-700 font-semibold rounded-md p-2'>Join Event</button>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                        <section className=' flex flex-col gap-2 bg-slate-50 h-full w-full max-w-xl  rounded-xl shadow-md p-6 border border-slate-200'>
                            <h3 className='text-slate-800 text-2xl font-medium'>Event Schedule</h3>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaCalendarAlt className='mt-1' />{event.date}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaClock className='mt-1' />{event.time}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaLocationDot className='mt-1' />{event.location}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaUsers className='mt-1' />{event.attendees}</p>

                        </section>
                        <section className='flex flex-col gap-2 w-full h-full max-w-xl bg-slate-50 rounded-xl shadow-md p-6 border border-slate-200'>
                            <h3 className='text-slate-800 text-2xl font-medium'>Event Organizer</h3>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaUser className='mt-1' />{event.organizer.name}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '>{event.organizer.role}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaEnvelope className='mt-1' />{event.organizer.email}</p>
                            <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaPhone className='mt-1' />{event.organizer.phone}</p>
                        </section>
                    </div>
                </section>
                <section className=' flex flex-col gap-2 bg-white shadow-md w-full rounded-xl  w-full max-w-5xl p-4 '>
                    <h2 className='text-2xl md:text-4xl flex gap-2 font-bold text-gray-800'><BiBook className='mt-1' />About Event</h2>
                    <p className='text-slate-600 text-base max-w-3xl'>{event.description}</p>


                </section>
            </div>
        </div>

    )
}

export default EventDetail
