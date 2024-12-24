import React from 'react'
import Header from '../Components/Header'
import SpecilatyMenu from '../Components/SpecilatyMenu'
import Topdoctors from '../Components/Topdoctors'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <SpecilatyMenu />
      <Topdoctors />
      <Banner />
  
    </div>
  )
}
