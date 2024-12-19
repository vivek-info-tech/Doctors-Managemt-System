 import React from 'react'
 import { Route,Routes } from 'react-router-dom'

 import Home from './Pages/Home'
import About from './Pages/About'
import Doctors from './Pages/Doctors'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import MyAppointment from './Pages/MyAppointment'
import MyProfile from './Pages/MyProfile'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'


  function App() {
   return (
     <div className=' mx-4 sm:mx-[10%'>
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/doctors/:speciality' element={<Doctors/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/my-appointment' element={<MyAppointment/>} />
          <Route path='/my-profile' element={<MyProfile/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/appointment/docId' element={<Appointment/>} />
           
         </Routes>
     </div>
   )
 }
 export default App
 