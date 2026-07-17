import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { FaHandshake } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaBullhorn } from 'react-icons/fa6';
import { FaStar } from "react-icons/fa";
import CommunityCard from '../components/CommunityCard'
import EventCard from '../components/EventCard'
import communities from '../data/communties'
import events from '../data/events'
const Home = () => {

    return (
        <div>
            <Hero />
            <section className='p-3'>
                <div className='flex flex-col justify-center gap-1 items-center mb-5 p-3'>
                    <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Popular Communities</h1>
                    <p className='text-sm text-gray-600'>Find and join communities from different cities and villages</p>
                </div>
                <div className='mt-4 grid  sm:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-4 '>

                    {communities.slice(0, 4).map((community, index) => {
                        return <CommunityCard key={index} name={community.name} image={community.image} members={community.members} desc={community.description} />
                    })}
                </div>
            </section>
            <section className='p-3 bg-slate-50'>
                <div className='flex flex-col justify-center gap-1 items-center mb-5 p-3'>
                    <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Upcoming Events</h1>
                    <p className='text-sm text-gray-600'>Don't miss exciting events happening near you and enjoy it</p>
                </div>
                <div className='mt-4 grid sm:grid-cols-1 grid-cols-1 gap-6 lg:grid-cols-3 '>
                    {events.map((event, index) => {
                        return <EventCard key={index} image={event.image} title={event.title} date={event.date} location={event.location} description={event.description} />
                    })}
                </div>
            </section>
            <section className=' max-w-6xl justify-center items-center mx-auto px-6 py-10 '>
                <div className='flex flex-col gap-2 justify-center  items-center'>
                    <div className='flex flex-row md:gap-2 sm:flex-row  justify-center items-center'>
                        <FaStar className='text-yellow-500 sm:mb-0 mb-9 md:text-4xl text-3xl' />
                        <h2 className=' md:text-4xl text-3xl font-bold text-center text-blue-900'>Why Choose<br className='sm:hidden' /> HometownHub</h2></div >
                    <p className=' text-sm text-gray-600 text-center mb-3'>Discover why thousands of people trust HometownHub to connect with their local communities</p>
                </div>
                <div className='grid justify-center  items-center px-3 py-3  grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6 '>
                    <div className='px-4 py-3 flex flex-col gap-3 mb-8  bg-slate-50 shadow-lg hover:-translate-y-1 hover-shadow-xl duration-300 trantision  rounded-md '>
                        <span className='flex gap-2'><FaHandshake className='text-blue-600 text-3xl lg:text-4xl' /><h2 className='text-blue-900 font-semibold text-xl lg:text-2xl'>Connect with Poeple</h2></span>
                        <p className=' sm:text-sm max-w-2xl font-medium text-gray-600'>Meet local residents, make new friends, workshops, and activities happening near you</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 mb-8  bg-slate-50 shadow-lg hover:-translate-y-1 hover-shadow-xl duration-300 trantision rounded-md '>
                        <span className='flex gap-2'><MdCelebration className='text-blue-600 text-3xl lg:text-4xl' /><h2 className='text-blue-900 font-semibold  text-xl lg:text-2xl'>Discover Events</h2></span>
                        <p className=' sm:text-sm font-medium max-w-2xl text-gray-600'>Find exciting local events,  festivals, workshops, and activities, happening near you</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 mb-8  bg-slate-50 shadow-lg hover:-translate-y-1 hover-shadow-xl duration-300 trantision  rounded-md '>
                        <span className='flex gap-2'> <FaBullhorn className='text-blue-600 text-3xl lg:text-4xl' /><h2 className='text-blue-900 font-semibold text-xl lg:text-2xl'>Share Updates</h2></span>
                        <p className=' sm:text-sm font-medium max-w-2xl text-gray-600'>Post announcements, community news, and important updates to keep everyone informed</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 mb-8  bg-slate-50 shadow-lg hover:-translate-y-1 hover-shadow-xl duration-300 trantision  rounded-md '>
                        <span className='flex gap-2' s> < FaEarthAmericas className='text-blue-600 text-3xl lg:text-4xl' /><h2 className='text-blue-900 font-semibold  text-xl lg:text-2xl'>Grow Your Network</h2></span>
                        <p className=' font-medium sm:text-sm max-w-2xl text-gray-600'>Expand your circle by joining communitiess and connecting with eople from different places</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
