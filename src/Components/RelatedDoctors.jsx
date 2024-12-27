import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useFetcher, useNavigate } from 'react-router-dom'

export default function RelatedDoctors(docId,speciality) {
    const {doctors}=useContext(AppContext)
	const navigate=useNavigate()
    
    const [relDoc,setRelDoc]=useState([])
  
       
    

    useEffect(()=>{
		if(doctors.length>0 && speciality){
            const docdatas=doctors.filter((doc)=>doc.speciality===speciality && doc._id!==docId)
            setRelDoc(docdatas)
			console.log(docdatas)
        }
    },[doctors,speciality, docId])
  return (
    <div className=' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
		<h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
		<p className='text-center text-sm  sm:w-1/3'>Simply browse through our extensive list of trusted doctors.</p>
		<div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
			{
				relDoc.slice(0,5).map((item,index)=>(
					<div key={index} onClick={()=>navigate(`/appointment/${ item._id}`)}  className='border border-blue-200 hover:scale-105 transition-all rounded-xl overflow-hidden cursor-pointer'>
						<img  className=' bg-blue-50'src={item.image} alt="" />
						<div className='p-4'>
							<div className='flex items-center gap-2 text-sm text-center text-green-500'>
								<p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
							</div>
							<p className='text-gray-900 text-lg font-medium'> {item.name}</p>
							<p className='text-gray-600 text-sm'>{item.speciality} </p>
						</div>
					</div>
				))
			}
		</div>
		<button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
	</div>
  )
}
