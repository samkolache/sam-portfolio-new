'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './navbar.css'
import { Bars3Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import { useState } from 'react'

const Navbar = () => {

const [isMobileOpen, setMobileOpen] = useState(false)

const handleToggle = () => setMobileOpen(prev => !prev);



  return (
    <>
      <nav className='flex justify-between py-5 px-16 border-b border-white border-opacity-10'>
        <Link href = "/">
          <Image
          src = '/logo.svg'
          alt='Logo for Sam Kotecha portfolio site'
          width={74}
          height={29}
          />
        </Link>
        <ul className='gap-10 hidden md:flex'>
            <li>
                <Link href = "/about" className='nav-link text-white font-light'>About</Link>
            </li>
            <li>
                <Link href = "/experience" className='nav-link text-white font-light'>Experience</Link>
            </li>
            <li>
            <Link href = "/blog" className='nav-link text-white font-light'>Blog</Link>
            </li>
            <li>
            <Link href = "/about" className='nav-link text-white font-light'>Contact</Link>
            </li>
        </ul>
        <Bars3Icon className='md:hidden w-5 h-5 text-white cursor-pointer' onClick={handleToggle} />
      </nav>
    <MobileNav isMobileOpen={isMobileOpen} handleToggle={handleToggle} />
    </>
    
  )
}

export default Navbar
