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
import Footer from './Components/Footer'


  function App() {
   return (
     <div className=' mx-3 sm:mx-[5%]'>
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
          <Route path='/appointment/doc3' element={<Appointment/>} />
           
         </Routes>
         <Footer/>
     </div>
   )
 }
 export default App
 