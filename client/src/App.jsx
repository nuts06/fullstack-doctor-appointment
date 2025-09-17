import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact';
import Doctor from './pages/About'
import Login from './pages/Login'
import About from './pages/About'

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/doctors' element={<Doctor />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/my-appointment' element={<MyAppointments />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
      </Routes>
    </div>
  )
}

export default App
