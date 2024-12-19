import React from 'react'
import { assets } from '../assets/assets'
export default function Header() {
  return (
	<div className='bg-primary flex flex-col md:flex-row  rounded-lg px-6 md:px-10 lg:px-20'> 
    <div className=' md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
           <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>Book Appointment <br/> with Trusted Doctors</p>
           <div  className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28 '  src={assets.group_profiles} alt="" />
            <p> Simply browse through our extensive list of trusted doctors,<br/> schedule your appointment hassle-free.</p>
           </div>
          <a href="http://" className=' bg-white text-sm flex items-center md:m-0 hover:scale-105 transition-all duration-300 rounded-full gap-2 m-auto text-gray-600 py-3 px-8'>
          Book Appointments <img className=' w-4' src={assets.arrow_icon} alt="" />
          </a>
    </div>
    <div className='md:w-[50%] relative'>
           <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
    </div>
  </div>
  )
}
