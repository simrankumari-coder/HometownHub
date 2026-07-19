import React from 'react'
import { useState } from 'react'
import events from '../data/events'
import { HiOutlineSearch } from "react-icons/hi";
import EventCard from '../components/EventCard';



const Events = () => {
    const [filterCategory, setFilterCategory] = useState("All")
    const [search, setSearch] = useState("")
    const filterEvents = events.filter((event, index) => {
        if (filterCategory === "All" && search.trim() === "") {
            return true
        }
        // else if (filterCategory === "All" && event.name.toLowerCase().includes(search.toLowerCase())) {
        //     return true;
        // } else if (event.category === filterCategory && search.trim() === "") {
        //     return true;
        // } else {

        //     return event.category === filterCategory && event.name.toLowerCase().includes(search.toLowerCase())
        // }
        return ((event.category === filterCategory || filterCategory === "All") && (search.trim() === "" || event.name.toLowerCase().includes(search.toLowerCase())))
    })
    return (
        <div className='bg-white px-4 py-7 flex flex-col gap-8'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Upcoming Events</h1>
                <p className='text-sm text-gray-600'>Discover exciting events happening in your hometown</p>
            </div>
            <div className='flex flex-col mt-4 gap-4'>
                <div className='flex gap-1'>
                    <HiOutlineSearch className='text-2xl md:text-4xl mt-1' />
                    <input onChange={(e) => setSearch(e.target.value)} value={search} className='outline-none border-2 border-gray-700 w-full hover:border-blue-700 p-1 md:py-3 py-1 rounded-md' placeholder='search events...' /></div>
                <div className='flex gap-2 mt-4 md:gap-6 flex-wrap justify-center items-center '>
                    <button onClick={() => setFilterCategory("All")} className={`${filterCategory === "All" ? "border-none  bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-22 font-medium `}> All</button>
                    <button onClick={() => setFilterCategory("Culture")} className={`${filterCategory === "Culture" ? "border-none bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-22 font-medium `}>Culture</button>
                    <button onClick={() => setFilterCategory("Sports")} className={`${filterCategory === "Sports" ? "border-none bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-22 font-medium `}>Sports</button>
                    <button onClick={() => setFilterCategory("Education")} className={`${filterCategory === "Education" ? "border-none bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-22 font-medium`}>Education</button>
                    <button onClick={() => setFilterCategory("Business")} className={`${filterCategory === "Business" ? "border-none bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-22 font-medium`}>Business</button>
                    <button onClick={() => setFilterCategory("Technology")} className={`${filterCategory === "Technology" ? "border-none bg-blue-500 text-white shadow-2xs" : "text-gray-400 border-gray-500 border "} rounded-lg  p-1 w-24 font-medium`}>Technology</button>
                </div>
                <section className=' m-2 mt-10 flex flex-col gap-8'>
                    <div>
                        <h2 className='text-blue-900 font-semibold text-2xl md:text-3xl'>Events</h2>
                        <p className='text-gray-600 text-sm'>Browse and join events that match your intersets</p>

                        {filterEvents.length > 0 ? <p className='mt-3 flex justify-start  text-gray-800 text-sm'>{`Showing ${filterEvents.length} out of 10 events`}</p> : ""}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6'>

                        {filterEvents.length === 0 ? <p className='text-[15px] flex gap-1  text-gray-600'> <HiOutlineSearch className='text-2xl text-gray-600 mt-1' />"No Events yet"<br />Try another search or category</p> : filterEvents.map((event, index) => {
                            return <EventCard key={event.id} id={event.id} attendees={event.attendees} date={event.date} category={event.category}
                                time={event.time} name={event.name} location={event.location} image={event.image} description={event.description} />
                        })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Events
