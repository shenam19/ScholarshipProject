import React from 'react'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className=' w-[100%] bg-[#3F5C91] h-[120px] opacity-80'>
    
        <h3 className='font-light text-3xl pt-3'>Other Related websites</h3>

      <div className=' flex gap-5 justify-center m-2'>
        <a href="https://www.dalailama.com/"> dalai lama scholarship</a>
        <a href="https://www.dalailama.com/"> dalai lama scholarship</a>
        <a href="https://www.dalailama.com/"> dalai lama scholarship</a>
        <a href="https://www.dalailama.com/"> dalai lama scholarship</a>
      </div>

      <div className=' h-10 bg-[#344755] flex items-center justify-center w-full'>
        <p className='text-white text-sm'>2024 Tibetan Scholarship website - Privacy Policy - Term of Service</p>
      </div>
      
    </div>
  )
}

export default Footer
