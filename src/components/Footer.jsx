import React from 'react'
import { HiHomeModern } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-slate-900 px-8 py-12 text-white'>
            <footer className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='max-w-xs'>
                    <div className='flex items-center gap-2'><HiHomeModern className=' mt-1 text-3xl' />
                        <h2 className='flex gap-1 font-semibold text-3xl'> HometownHub</h2></div>
                    <p className='text-white text-gray-300 text-sm leading-6'>Bringing hometown communties together through events, updates, and meaningful local connections</p></div>
                <div className='text-white'>
                    <h2 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Quick Links</h2>
                    <ul>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Home</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Communities</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Events</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Feed</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h2 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Contact</h2>
                    <p className='flex gap-1'>
                        <span>< FaEnvelope className='text-sm mt-1 ' /></span><a className='text-gray-300 text-sm' href='mailto:support@hometownhub.com'>support@hometownhub.com</a></p>
                    <p className='flex gap-1'><FaMapMarkerAlt className='mt-1' /><span>Punjab,India</span></p>
                </div>
                <div className='text-white'>
                    <p className='flex gap-1 text-gray-100 gap-1 text-lg font-semibold uppercase tracking-wide mb-4'><AiOutlineGlobal className='mt-1' /><span className=''>Social Icons</span></p>
                    <div className='flex gap-4 mt-3'>

                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://linkdin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    </div>
                </div>
            </footer >

            <div className='text-white border-t border-slate-700 mt-10 pt-6 text-center flex justify-center items-center text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} HometownHub. All rights reserved.
            </div>
        </div >
    )
}

export default Footer
