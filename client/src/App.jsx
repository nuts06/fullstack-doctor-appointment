import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import Doctor from './pages/About'
import Login from './pages/Login'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        {/* /doctors > <Doctor /> > shows all the doctor */}
        <Route path='/doctors' element={<Doctor />}/>
        {/* I have one doctors page, and when the user clicks a speciality (like cardiology, dentist, etc.), it should show only the doctors of that speciality, but still on the same doctors page. */}
        {/* /doctors/cardiology → <Doctor /> shows filtered doctors (only cardiologists) */}
        {/* this is the correct way to show filtered doctors on the same page using a dynamic route. */}
        <Route path='/doctors/:speciality' element={<Doctor />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/my-appointment' element={<MyAppointments />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/appointment/:doctorId' element={<Appointment />}/>
      </Routes>
    </div>
  )
}

export default App
