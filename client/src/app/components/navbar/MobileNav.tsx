'use client'
import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'


const MobileNav = ({isMobileOpen, handleToggle}) => {


  return (
    <div className = 
    {`md:hidden bg-boxes min-h-screen w-1/2 fixed top-0 right-0 flex justify-center items-center 
    ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className='flex flex-col space-y-16'>
        {/* title */}
        <div>
          <p className='text-white text-[11px] border-b pb-2 border-white border-opacity-50'>NAVIGATION</p>
        </div>
          

          <ul className='gap-5 flex flex-col text-4xl'>
            <li>
                <Link href = "/about" className='nav-link text-white font-light'>About</Link>
            </li>
            <li>
                <Link href = "/about" className='nav-link text-white font-light'>Experience</Link>
            </li>
            <li>
            <Link href = "/about" className='nav-link text-white font-light'>Blog</Link>
            </li>
            <li>
            <Link href = "/about" className='nav-link text-white font-light'>Contact</Link>
            </li>
          </ul>

          <ul className='flex gap-5 text-sm'>
            <li>
              <a href = "https://www.linkedin.com/in/sameer-z-kotecha/" className='text-white'>LinkedIn</a>
            </li>
            <li>
              <a href = "https://github.com/samkolache" className='text-white'>Github</a>
            </li>
            <li>
              <a href = "https://www.linkedin.com/in/sameer-z-kotecha/" className='text-white'>Resume</a>
            </li>
          </ul>
        
      </div>
        <XMarkIcon
        className='w-8 h-8 text-white absolute top-5 right-5 cursor-pointer'
        onClick={handleToggle}
        />
    </div>
  )
}

export default MobileNav
