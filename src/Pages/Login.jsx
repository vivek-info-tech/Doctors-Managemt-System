import React, { useState } from 'react'

export default function Login() {
  const [state,setState]=useState('Sign Up')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [name,setName]=useState('')
 const onSubmithandler=(event)=>{
    event.preventDefault()
 }


  return (
	
  <form className='min-h-[80vh]  flex items-center'>

    <div className='flex flex-col items-start gap-3 m-auto p-8 sm:min-w-[340px] md:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
      <p className=' text-2xl font-semibold '>{state==='Sign Up'?"Create Account":"Login"}</p>
      <p>Please {state==='Sign Up'?"sign up":"log in"} to book appointment. </p>
      <div className={`w-full ${state==='Login'? "hidden":"block"}`}>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type=' text' onChange={(evt)=>setName(evt.target.name)} value={name} />
      </div>
      <div className=' w-full'>
        <p>Email</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type=' email' onChange={(evt)=>setEmail(evt.target.email)} value={email} />
      </div>
      <div className=' w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type=' password' onChange={(evt)=>setPassword(evt.target.password)} value={password} />
      </div>
      <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='Sign Up'?"Create Account":"Login"}</button>
        {
          state==="Sign Up"? <p>
            Already have an account? <span  onClick={()=>setState('Login')} className='text-primary cursor-pointer underline '>Login here</span>
          </p>
          :
          <p>
            Create an new account? <span onClick={()=>setState('Sign Up')} className='text-primary cursor-pointer underline '>click here</span>
          </p>
        }
    
    </div>
  </form>
  )
}
