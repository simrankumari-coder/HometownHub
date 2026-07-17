import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const CommunityCard = ({ name, image, desc, id, members }) => {
    return (
        <div>

            <div className='shadow-lg hover:shadow-xl hover:-translate-y-2 hover-shadow-xl duration-300 trantision bg-slate-50 rounded-xl p-3 flex flex-col gap-3'>
                <img className='w-full h-40 object-cover rounded-lg' src={image} alt='commuity image' />
                <h2 className='text-blue-900 font-bold text-xl'>{name}</h2>
                <p className='text-blue-600 font-medium text-sm flex gap-2 '><FaUsers className='text-xl' />{members}{" "}Members</p>
                <p className='text-gray-600 text-sm min-h-24 lg:min-h-16 leading-relaxed'>{desc}</p>
                <div className='flex justify-center items-center gap-4'>
                    <Link to={`/communities/${id}`} >
                        <button className='bg-white text-blue-700 border border-blue-700 duration-300 hover:bg-blue-50 font-semibold rounded-md p-2'>View Details</button>
                    </Link>
                    <button className='bg-blue-700 text-white duration-300 hover:bg-blue-700 font-semibold rounded-md p-2'>Join Community</button>
                </div>
            </div>

        </div>
    )
}

export default CommunityCard
