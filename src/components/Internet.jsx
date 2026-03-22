import React from 'react'
import { CiWifiOff } from "react-icons/ci";

const Internet = () => {

  return (
    <>
    <div className='overflow-hidden bg-black h-screen w-screen flex items-center justify-center'>
      <span className='text-white text-5xl'>please check your internet connection</span> <br /> 
      <br /> <br />
      <CiWifiOff className='text-red-500 text-6xl ml-4' />

    </div>
    </>
  )
}

export default Internet