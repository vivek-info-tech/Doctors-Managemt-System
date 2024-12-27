import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function MyAppointment() {
   const{doctors}=useContext(AppContext)
   
  
  return (
	<div>
    <p className=' pb-3 mt-12 font-medium text-zinc-700 border-b'> My appointment</p>
    <div>
    {
      doctors.slice(0,3).map((items,index)=>(
        <div className=' grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b ' key={index}>
          <div>
            <img className=' w-32 bg-indigo-50' src={items.image} alt="" />
          </div>
          <div className=' flex-1 text-sm text-zinc-600 '>
            <p  className=' text-neutral-800 font-semibold'>{items.name}</p>
            <p>{items.speciality}</p>
            <p className=' font-medium text-zinc-700 mt-1 '>Address:</p>
            <p className=' text-xs'>{items.address.line1}</p>
            <p className=' text-xs'>{items.address.line2}</p>
            <p className=' text-xs mt-1 '><span className=' text-sm text-neutral-700 font-medium '>Date & Time:</span> 25,July,2024 | 8:30 PM </p>
          </div>
          <div></div>
          <div className=' flex flex-col gap-2 justify-end '>
            <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:text-white hover:bg-primary transition-all duration-300'>Pay Online</button>
            <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:text-white hover:bg-red-600 transition-all duration-300'>Cancel appointment</button>
          </div>

        </div>
      ))
    }
    </div>
  </div>
  )
}
