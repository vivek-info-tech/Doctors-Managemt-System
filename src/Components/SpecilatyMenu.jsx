import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
export default function SpecilatyMenu() {
  return (
	<div id='speciality' className='flex flex-col gap-4 py-16 text-gray-800 items-center'>
		<h1 className='text-3xl font-medium'>Find by Speciality </h1>
		<p className='text-sm w-1/3 text-center'>Simply browse through our extensive list of trusted doctors, schedule  
		your appointment hassle-free.</p>
		<div className='flex w-full pt-5  sm:justify-center overflow-scroll gap-4'>
            {
				specialityData.map((it,ind)=>(
					<Link onClick={()=>scrollTo(0,0)} className=' flex  flex-col gap-2 text-xs cursor-pointer flex-shrink-0 transition-all duration-500 hover:translate-y-[-10px] items-center' key={ind} to={`/doctors/${it.speciality}`}>
					<img className='w-16 sm:w-24 mb-2 ' src={it.image} alt="" />
					<p>{it.speciality}</p>
					</Link>
				))
			}    
		</div>
	</div>
  )
}
