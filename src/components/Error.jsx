import React from 'react'
import { TbFaceIdError } from "react-icons/tb";

const Error = () => {
  return (
    <div className='overflow-hidden fixed z-10 bg-black h-screen w-screen flex items-center justify-center'>
      <span className='text-white text-5xl'>Something went wrong</span> br
      
      <TbFaceIdError className='text-red-500 text-6xl ml-4' />

    </div>
  )
}

export default Error