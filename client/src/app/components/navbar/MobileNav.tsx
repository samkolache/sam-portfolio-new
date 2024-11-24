'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { XMarkIcon, SunIcon, MoonIcon  } from '@heroicons/react/16/solid'

import { ThemeContext } from '@/contexts/ThemeContext'
import clsx from 'clsx'

const MobileNav = ({ isMobileOpen, handleToggle }) => {
  const {isDark, setIsDark} = useContext(ThemeContext)

  const handleTheme = () => {setIsDark(prev => !prev)}

  return (
    <div
      className={clsx(
        `md:hidden bg-[#0E101A] min-h-screen w-3/4 fixed top-0 right-0 flex justify-center items-center 
      ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 px-8`,
      {
        "bg-[#0E101A]" : isDark,
        "bg-[#E4E6F1]" : !isDark
      }
      )}
    >
      <div className='flex flex-col space-y-12'>
        {/* Title */}
        <div>
          <p className = {clsx(
            'text-xs border-b pb-2 border-opacity-50',
            {
              "text-white border-white" : isDark,
              "text-black border-black" : !isDark

            }
          )}>NAVIGATION</p>
        </div>

        {/* Navigation Links */}
        <ul className='gap-5 flex flex-col text-3xl'>
          <li>
            <Link href="/about" className = {clsx(
              'nav-link font-light',
              {
                "text-white": isDark,
                "text-black" : !isDark
              }
            )} onClick={handleToggle}>About</Link>
          </li>
          <li>
            <Link href="/experience" className = {clsx(
              'nav-link font-light',
              {
                "text-white": isDark,
                "text-black" : !isDark
              }
            )} onClick={handleToggle}>Experience</Link>
          </li>
          <li>
            <Link href="/blog" className = {clsx(
              'nav-link font-light',
              {
                "text-white": isDark,
                "text-black" : !isDark
              }
            )} onClick={handleToggle}>Blog</Link>
          </li>
          <li>
            <Link href="/#contact" className = {clsx(
              'nav-link font-light',
              {
                "text-white": isDark,
                "text-black" : !isDark
              }
            )} onClick={handleToggle}>Contact</Link>
          </li>
        </ul>

        {/* Social Links */}
        <ul className='flex gap-5 text-sm'>
          <li>
            <a href="https://www.linkedin.com/in/sameer-z-kotecha/" className = {clsx(
              {
                'text-white' : isDark,
                "text-black" : !isDark
              }
            )}>LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/samkolache" className = {clsx(
              {
                'text-white' : isDark,
                "text-black" : !isDark
              }
            )}>Github</a>
          </li>
          <li>
            <a href="https://samk-resume.tiiny.site/" className = {clsx(
              {
                'text-white' : isDark,
                "text-black" : !isDark
              }
            )}>Resume</a>
          </li>
        </ul>

        <div className='flex justify-center'>
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
        </div>
        
      </div>
      
      {/* Close Icon */}
      <XMarkIcon
        className = {clsx(
          'w-8 h-8 absolute top-5 right-5 cursor-pointer',
          {
            "text-white" : isDark,
            "text-black" : !isDark

          }

        )}
        onClick={handleToggle}
      />
    </div>
  )
}

export default MobileNav
