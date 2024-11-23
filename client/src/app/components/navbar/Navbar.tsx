'use client'
import React, { useState, useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'
import './navbar.css'
import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import TransitionLink from "../TransitionLink"
import clsx from 'clsx'

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)

  const handleToggle = () => setMobileOpen(prev => !prev)

  const {isDark, setIsDark} = useContext(ThemeContext)
  const handleTheme = () => setIsDark(prev => !prev)

  return (
    <>
      <nav className= {clsx(
        'flex justify-between items-center py-5 px-8 md:px-16 sticky top-0 z-50', 
        {
          "bg-[#0E101A]" : isDark,
          "bg-lightBg" : !isDark
        }
      )}>
        <TransitionLink href="/">
        {isDark 
        ?
        <Image
        src='/logo.svg'
        alt='Logo for Sam Kotecha portfolio site'
        width={74}
        height={29}
      />
      :
      <Image
        src='/dark-logo.svg'
        alt='Logo for Sam Kotecha portfolio site'
        width={74}
        height={29}
      />
      
       }
          
        </TransitionLink>
        
        <ul className='gap-10 hidden md:flex md:items-center'>
          <li>
            <TransitionLink href="/about" className=''>About</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/experience" >Experience</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/blog">Blog</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/#contact">Contact</TransitionLink>
          </li>
          <li>
            {isDark 
            ? 
            <SunIcon 
            onClick={handleTheme}
            className='w-6 h-6 text-white  cursor-pointer' 
            />
            :
            <MoonIcon 
            onClick={handleTheme}
            className='w-6 h-6 text-black  cursor-pointer' 
            />
          }
            
          </li>
        </ul>
        
        <Bars3Icon className='md:hidden w-5 h-5 text-white cursor-pointer' onClick={handleToggle} />
      </nav>
      
      <MobileNav isMobileOpen={isMobileOpen} handleToggle={handleToggle} />
    </>
  )
}




export default Navbar
