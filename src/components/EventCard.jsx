import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const EventCard = ({ image, name, date, time, category, attendees, location, description }) => {
    return (
        <div>
            <div className='shadow-lg hover:-translate-y-2 hover-shadow-xl duration-300 trantision bg-slate-50 rounded-xl p-3 flex flex-col gap-2 bg-white'>
                <img className='w-full sm:40 md:h-60 lg:h-40 object-cover rounded-lg' src={image} alt='event image' />
                <h3 className='bg-gray-200  rounded-full w-1/2 flex justify-center items-center text-gray-700 p-1 '>{category}</h3>
                <h2 className='text-slate-900 font-bold text-xl'>{name}</h2>
                <div>
                    <p className='text-gray-600 font-medium text-sm flex gap-2 '><FaCalendarAlt className='mt-1' />{date}</p>
                    <p className='text-gray-800 font-medium text-sm flex gap-2 '><FaClock className='mt-1' />{time}</p>
                    <p className='text-black font-medium text-sm flex gap-2 '><FaLocationDot className='mt-1' /><span className=''>{location}</span></p></div>
                <p className='text-blue-700 flex gap-1'><FaUsers className='mt-1' />{attendees}{" "}Attendees</p>
                <p className='text=gray-600 text-sm leading-relaxed'>{description}</p>
                <button className='font-semibold bg-blue-700 text-white duration-300 hover:bg-blue-700 rounded-md p-2'>Join Event</button>
            </div>
        </div>
    )
}

export default EventCard
