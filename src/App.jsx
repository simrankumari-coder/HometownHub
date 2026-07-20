import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Events from './pages/Events'
import Communities from './pages/Communities'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import Footer from './components/Footer'
import CommunityDetail from './pages/CommunityDetail'
import EventDetail from './pages/EventDetail'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/communities" element={<Communities />} />
        <Route path='/communities/:id' element={<CommunityDetail />} />
        <Route path='/events/:id' element={<EventDetail />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
