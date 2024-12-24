import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
assets
export default function Banner() {
	const navigate=useNavigate();
	return (
		<div className='bg-primary flex rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:my-10 '>
			<div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
				<p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>Book Appointment
					<br className='mt-4' />
					With 100+ Trusted Doctors</p>
				<button onClick={()=>navigate('/login')} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create Account</button>
			</div>
			<div className=' hidden md:block md:w-1/2 lg:w-[370px] relative'>
     <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
			</div>
		</div>
	)
}
