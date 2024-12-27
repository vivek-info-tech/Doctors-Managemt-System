import React, { useState } from 'react'
import { assets } from '../assets/assets'

export default function MyProfile() {
 const [userData,setUserData]=useState({
  name:"Vivek Kumar Yadav",
  image:assets.profile_pic,
  email: " vivek@gmail.com",
  phone:'+91 888888888',
  address:{
    line1:"Karmeta Jabalpur",
    line2:"Jabalpur, MP"
  },
  gender:"Male",
  dob:'2000-01-20'
 })

const [isEdit,setIsEdit]=useState(true)

  return (
	<div className='max-w-lg flex flex-col gap-2  text-sm'>
    <img className=' w-36 rounded ' src={userData.image} alt="" />
    {
      isEdit?<input className=' bg-gray-50 text-3xl font-medium max-w-72 mt-4' type='text' value={userData.name} onChange={ e=>setUserData(prev=>({...prev,name:e.target.value}))}   />:
      <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
    }
    <hr className=' bg-zinc-400 h-[1px] border-none ' />
    <div>
      <p className=' text-neutral-500  underline mt-3'>CONTACT INFORMATION</p>
      <div className=' grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
        <p className=' font-medium '>Email id:</p>
        <p className=' text-blue-500 '>{userData.email}</p>
        <p className=' font-medium '>Mobile no:</p>
        {
          isEdit?<input className=' bg-gray-100 max-w-52 ' type='text' value={userData.phone} onChange={evt=>setUserData(prev=>({...prev,phone:evt.target.value}))} />:
          <p className=' text-blue-500'>{userData.phone}</p>
        }
        <p className='font-medium '>Address:</p>
        {
          isEdit? <p>
            <input className='bg-gray-50' type="text" onChange={e=>setUserData(prev=>({...prev.address, line1:e.target.value}))} value={userData.address.line1}  /> <br />
            <input className='bg-gray-50'  type="text" onChange={e=>setUserData(prev=>({...prev.address,line2: e.target.value}))} value={userData.address.line2} />
          </p> : <p className=' text-gray-500'>
            {userData.address.line1} <br />
            {userData.address.line2}
          </p>
        }

      </div>
      <div>
        <p className=' underline text-neutral-500 mt-3 '>BASIC INFORMATION</p>
        <div className=' grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className=' font-medium '>Gender:</p>
          {
            isEdit? <select className=' max-w-20  bg-gray-100' onChange={e=>setUserData(prev =>({...prev,gender: e.target.value}))} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> : <p className=' text-gray-400'>
            {userData.gender}
            </p>
          }

          <p className=' font-medium '>Date Of Birth</p>
          {
            isEdit? <input className='bg-gray-100 max-w-28' type="date" onChange={ (e)=>setUserData((prev)=>({...prev,dob:e.target.value}))} />: 
            <p className=' text-gray-400'>{userData.dob}</p>
          }
        </div>

      </div>
      <div className=' mt-10 '>
        {
          isEdit? <button className=' border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all ' onClick={()=>setIsEdit(false)}>Save information</button>
          :<button className=' border  border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all  '  onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>


  </div>
  )
}
