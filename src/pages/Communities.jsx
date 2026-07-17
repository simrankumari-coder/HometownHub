import React from 'react'
import { useState } from 'react'
import CommunityCard from '../components/CommunityCard'
import communities from '../data/communties'
import { HiOutlineSearch } from "react-icons/hi";


const Communities = () => {
    const [filterCategory, setFilterCategory] = useState("All")
    const [search, setSearch] = useState("")
    const filterCommunities = communities.filter((community, index) => {
        if (filterCategory === "All" && search.trim() === "") {
            return true
        }

        return ((community.category === filterCategory || filterCategory === "All") && (search.trim() === "" || community.name.toLowerCase().includes(search.toLowerCase())))
    })


    return (
        <div className='bg-white px-4 py-7 flex flex-col gap-8'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Explore Communities</h1>
                <p className='text-sm text-gray-600'>Find and join communities that match your interests. Connect with people, discover local groups,  and become part of your  hometown community</p>
            </div>
            <div className='flex flex-col mt-4 gap-4'>
                <div className='flex gap-1'>
                    <HiOutlineSearch className='text-2xl md:text-4xl mt-1' />
                    <input onChange={(e) => setSearch(e.target.value)} value={search} className='outline-none border-2 border-gray-700 w-full hover:border-blue-700 p-1 md:py-3 py-1 rounded-md' placeholder='search communities...' /></div>
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
                        <h2 className='text-blue-900 font-semibold text-xl md:text-3xl'>Communities</h2>
                        <p className='text-gray-600 text-sm'>Browse and join communities that match your intersets</p>

                        {filterCommunities.length > 0 ? <p className='mt-3 flex justify-start  text-gray-800 text-sm'>{`Showing ${filterCommunities.length} out of 10 communities`}</p> : ""}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6'>

                        {filterCommunities.length === 0 ? <p className='text-[15px] flex gap-1  text-gray-600'> <HiOutlineSearch className='text-2xl text-gray-600 mt-1' />"No Communities yet"<br />Try another search or category</p> : filterCommunities.map((community, index) => {
                            return <CommunityCard id={community.id} key={index} name={community.name} image={community.image} members={community.members} desc={community.description} />
                        })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Communities
