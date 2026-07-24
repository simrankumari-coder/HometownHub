import React from 'react'
import { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import feedData from '../data/feed'
const Feed = () => {
    const [toggle, setToggle] = useState(() => {
        const saved = localStorage.getItem("data")
        return saved ? JSON.parse(saved) : feedData
    })
    console.log("refresh", toggle[0].isToggle)
    const [showComment, setShowComment] = useState(null)

    const [input, setInput] = useState([])

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(toggle))


    }, [toggle])

    const toggleLike = (id) => {
        const newObj = toggle.map(toggle => {
            if (toggle.id === id) {
                return { ...toggle, isToggle: !toggle.isToggle, likes: !toggle.isToggle === true ? toggle.likes + 1 : toggle.likes - 1 }
            }

            else {
                return toggle
            }
        })
        setToggle(newObj)
    }
    const toggleComment = (id) => {
        if (showComment === id) {
            setShowComment(null)
        } else {
            setShowComment(id)
        }
    }
    const handleInput = (e, id) => {
        const value = e.target.value;
        const existId = input.find(text => text.id === id)
        if (existId) {
            setInput(input.map(item => {
                return item.id === id ?
                    { ...item, text: value } : item

            }))
        } else {
            setInput([...input, { id, text: value }])

        }

    }
    const handleBtn = (id) => {
        const currentText = input.find(item => item.id === id)
        if (!currentText) {
            return;
        }

        console.log("text ", currentText.text)
        const newComment = toggle.map(toggle => {
            if (toggle.id === id) {

                return {
                    ...toggle, comments: [
                        ...toggle.comments, { author: "simran kumari", text: currentText.text }]
                }
            }
            return toggle
        })
        setInput(input.map(text => text.id === id ? { ...text, text: "" } : text))

        setToggle(newComment)

    }
    return (
        <div className='bg-white px-4 py-7 flex flex-col gap-8'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl font-bold text-blue-900'>Community Feed</h1>
                <p className='text-sm text-gray-600'>"Stay connected with your hoemtown community."</p>
            </div>
            <section>
                <div className='flex flex-col justify-center gap-5 items-center p-3 md:p-6 max-w-3xl mx-auto w-full'>
                    {toggle.map((post) => {
                        return <div key={post.id} className='px-5 py-5 bg-slate-50 max-w-5xl w-full shadow-md hover:shadow-xl transition duration-300 rounded-xl '>
                            <div className='flex justify-between'>

                                <h2 className='flex gap-2 text-[18px] font-bold'><FaUser className='mt-1 text-black' />{post.author}</h2>

                                <p className=' text-[13px] text-gray-500'>{post.time}</p>
                            </div>
                            <p className='text-blue-700 text-[14px]'>{post.community}</p>
                            <p className='mt-3 leading-7 text-gray-700 '>{post.content}</p>
                            <img className=' w-full rounded-xl h-72 object-cover mt-4' src={post.image} alt={post.community} />
                            <div className='flex gap-20 pt-4 mt-5 border-t border-slate-200 text-black'>

                                <span className='flex gap-1 text-xl'>
                                    {post.isToggle === true ?
                                        <FaHeart onClick={() => toggleLike(post.id)} className='hover:scale-110 transition text-red-600 cursor-pointer mt-1' /> : <FaRegHeart onClick={() => toggleLike(post.id)} className='mt-1 cursor-pointer hover:scale-110 transition' />
                                    }
                                    {post.likes}
                                </span>
                                <section>
                                    <span className='flex gap-1 text-xl'><FaRegCommentDots className='hover:scale-110 transition text-black mt-1' onClick={() => toggleComment(post.id)} />{post.comments.length}
                                    </span>

                                    {showComment === post.id &&
                                        <div className='mt-4 border-t p-3 pt-4 bg-slate-100 rounded-xl border-slate-200  shadow-sm '>
                                            {post.comments.map(comment =>
                                                <div className='mb-3 border-b border-slate-200 pb-2' key={comment.id}>
                                                    <h2 className='font-semibold text-sm text-slate-800'>{comment.author}</h2>
                                                    <p className='text-gray-600 mt-1 text-sm'>{comment.text}</p>
                                                </div>
                                            )
                                            }
                                            <div className='flex gap-2 mt-5'>

                                                <input className='flex-1 border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none rounded-lg px-3 py-2' value={input.find(item => item.id === post.id)?.text || ""} onChange={(e) => handleInput(e, post.id)} placeholder='add comments' />

                                                <button className='bg-blue-700 hover:bg-blue-800 transition text-white px-4 rounded-lg' onClick={() => handleBtn(post.id)}>Add</button>
                                            </div>
                                        </div>
                                    }
                                </section>
                            </div>
                        </div>
                    })}
                </div>
            </section>

        </div>
    )
}

export default Feed
