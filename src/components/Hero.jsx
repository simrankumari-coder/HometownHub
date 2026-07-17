import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaBullhorn } from 'react-icons/fa6';
import background from '../assets/images/background.jpg'
const Hero = () => {
    return (
        <div className='bg-white'>
            <div className='relative flex flex-col justify-center items-center'>
                <img className='w-full max-w-full h-[320px] md:h-[500px] object-cover' style={{ backgroundImage: `url(${background})` }} src={background} alt="no img found" />

                <div className='absolute inset-0 px-4 gap-3 z-3 font-bold justify-center items-center flex flex-col'>
                    <h1 className='text-white font-bold text-3xl md:text-5xl text-center' >Welcome to the HometownHub</h1>
                    <p className='text-blue-100 text-sm md:text-lg text-center flex '>  Connect with your neighbors, join local communities, discover events, and share updates in one place</p>
                    <div className='flex justify center items-center md:mt-6 gap-3'>
                        <button className='text-white bg-blue-800 hover:bg-blue-900 text-xs sm:text-sm md:text-lg rounded-md px-3 py-2  '>Join Community</button>
                        <button className='text-white bg-blue-800 hover:bg-blue-900 text-xs  text-sm md:text-lg rounded-md px-3 py-2   '>Explore Events</button>
                    </div>
                </div>
            </div>
            <section className='bg-slate-50 p-6 flex flex-col gap-6'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='flex text-5xl gap-2 font-bold text-blue-700'><FaEarthAmericas className='text-blue-700 mb-1' />Explore</h1>
                    <h2 className='mt-3 text-2xl md:text-4xl font-bold text-blue-900 '>Explore Hometown Hub</h2>
                    <p className='text-sm text-gray-600'>Discover communities, attend local events, and stay connected with your hometown </p>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 mt-3 lg:grid-cols-4 mt-3'>
                    <div className='p-4 hover:ring-2 hover:ring-blue-400 bg-white rounded-md shadow-md hover:shadow-lg'>
                        <FaUsers className='text-blue-600' />
                        <p className='font-bold text-gray-800 '>Join Communities</p>
                        <p className='font-medium text-sm text-gray-600'>Find and join communities from your city or village</p>
                    </div>
                    <div className='p-4 hover:ring-2 hover:ring-blue-400  bg-white rounded-md shadow-md hover:shadow-lg'>
                        <FaCalendarAlt className='text-blue-600' />
                        <p className='font-bold text-gray-800'>Local Events</p>
                        <p className='font-medium text-sm text-gray-600'>Discover exciting local events near you</p>
                    </div>
                    <div className='p-4 hover:ring-2 hover:ring-blue-400 bg-white rounded-md shadow-md hover:shadow-lg'><FaComment className='text-blue-600' />
                        <p className='font-bold text-gray-800'>Community Feed</p>
                        <p className='font-medium text-sm text-gray-600'>Stay connected with community posts and discussions</p>
                    </div>
                    <div className='p-4 hover:ring-2 hover:ring-blue-400  bg-white rounded-md shadow-md hover:shadow-lg'><FaBullhorn className='text-blue-600' />
                        <p className='font-bold text-gray-800'>Share Updates</p>
                        <p className='font-medium text-sm text-gray-600'>Share announcements and important updates</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
