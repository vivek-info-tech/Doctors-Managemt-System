import React, { useContext, useEffect, useState } from 'react'
import { assets, specialityData } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import RelatedDoctors from '../Components/RelatedDoctors'

export default function Appointment() {
  const { doctors,curensysmbol } = useContext(AppContext)
  const { docId } = useParams()
  const dayofweek=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
 

  const [docInfo, setDocInfo] = useState(null)

    const [docSlot,setDocSlot]=useState([])
    const [slotIndex,setSlotIndex]=useState(0)
    const [slotTime,setSlotTime]=useState('')

    const getAvailableSlot=async ()=>{
      setDocSlot([])

      //current date
      let Today= new Date();
      for(let i=0;i<7;i++){
        // geting date from today
        let currentdate= new Date(Today);
        currentdate.setDate(Today.getDate()+i)
        // setting end time of date with index
        let endtime= new Date()
        endtime.setDate(Today.getDate()+i)
        endtime.setHours(21,0,0,0)
         
        //seting hours
        if(Today.getDate()===currentdate.getDate()){
          currentdate.setHours(currentdate.getHours()>10?currentdate.getHours()+1:10)
          currentdate.setMinutes(currentdate.getMinutes()>30?30:0)
        }else{
          currentdate.setHours(10)
          currentdate.setMinutes(0)
        }
        let timeSlot=[]

        while(currentdate< endtime){
              let formatedtime=currentdate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
              timeSlot.push(
                {
                  datetime:new Date(currentdate),
                  time: formatedtime
                }
              )

              //increment time by 30 minutes
              currentdate.setMinutes(currentdate.getMinutes()+30)
        }
        setDocSlot(prev=>([...prev,timeSlot]))
      }
    }


  const fetchDocId = async () => {
    const sdocInfo = doctors.find(doc => doc._id === 'doc3')
    setDocInfo(sdocInfo)

  }
  useEffect(() => {
    fetchDocId()
  }, [doctors, docId])

  useEffect(()=>{
    getAvailableSlot()
  },[docInfo])

  useEffect(()=>{
     
  },[docSlot])
  


  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='w-full bg-primary rounded-lg sm:max-w-72' src={docInfo.image} alt="" />
        </div>
        <div className='rounded-lg border border-gray-400 py-7 p-8 flex-1 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0'>
          <div className='flex gap-2 text-2xl items-center font-medium text-gray-900'>
            <p>{docInfo.name}</p>
            <img  className='w-5'src={assets.verified_icon} alt="" />
          </div>
          <div className='flex items-center text-sm text-gray-600 mt-1 gap-2'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xl rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <h1 className='flex gap-2 text-sm items-center mt-3 text-gray-900 font-medium py-1'>
              About 
              <img src={assets.info_icon} />
            </h1>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1' >{docInfo.about}</p>
          </div>
          <div className='mt-4 font-medium text-gray-500 '>
            <p>Appointment fee: <span className='text-gray-600'> {curensysmbol} {docInfo.fees}</span></p>
          </div>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 font-medium mt-3 text-gray-700'>
        <p>Booking slots</p>
        <div className=' flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
             docSlot.length && docSlot.map(
              (items,index)=>(
                <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?'text-white bg-primary':'border border-green-200'}`}>
                  <p>{items[0] && dayofweek[items[0].datetime.getDay()]}</p>
                  <p>{items[0] && items[0].datetime.getDate()}</p>
                </div>
                
              
             ))
          }
        </div>
        <div className=' flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot[slotIndex].map((items,index)=>(

              <p onClick={()=>setSlotTime(items.time)} key={index} className={` ${items.time===slotTime?'bg-primary text-white ': 'text-gray-400 border border-gray-300'} text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer`}>
                {
                  items.time.toLowerCase()
                }
              </p>
            ))
          }
        </div>
        <button className=' bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
      <p>{docId}</p>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}
