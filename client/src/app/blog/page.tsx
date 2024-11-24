'use client'
import { div } from 'framer-motion/client'
import React, {useContext} from 'react'
import "../globals.css"
import Link from 'next/link'

import clsx from 'clsx'; 
import { ThemeContext } from '@/contexts/ThemeContext';


const Page = () => {
    const {isDark} = useContext(ThemeContext)
  return (
    <div className='py-32 relative'>
        <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
        
        <h1 className = {clsx(
            "text-4xl md:text-6xl pl-8 md:pl-16 font-bold",
            {
                "text-white" : isDark,
                "text-black" : !isDark,
            }
        )}>blog.</h1>

        {/* Blog Container */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8 py-20 px-4">
            <BlogPreview 
                link="/blog/ui-in-ai" 
                title="How to Design UI/UX for AI Services and Products" 
                cat="UI/UX & AI - 5 min read" 
                prev="How can we design AI products to be easy to use for all? What components can make these tools more accessible?" 
            />
            <BlogPreview 
                link="/blog/accessible" 
                title="Essential Tips for Designing Accessible Websites for All" 
                cat="UI/UX & Web Dev - 5 min read" 
                prev="From screen readers to text-to-speech software, here are some tips to make your website accessible to all" 
            />
        </div>
    </div>
  )
}

const BlogPreview = ({ title, cat, prev, link }) => {
    const {isDark} = useContext(ThemeContext)
    return (
        <Link href={link} className='cursor-pointer'>
            <div className = {clsx(
                'm-4 max-w-[400px] md:max-w-[600px] space-y-3 bg-opacity-77 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200',
                {
                    "bg-[#0E101B]" : isDark,
                    "bg-[#E4E6F1]" : !isDark
                }
            )}>
                <div className='flex flex-col space-y-1'>
                    <h2 className = {clsx(
                        'text-xl md:text-2xl font-semibold',
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark,
                        }
                    )}>{title}</h2>
                    <p className = {clsx(
                        'text-sm md:text-base font-light',
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark,
                        }
                    )}>{cat}</p>
                </div>
                <p className = {clsx(
                    "text-base md:text-lg font-light",
                    {
                        "text-white" : isDark,
                        "text-black" : !isDark,
                    }
                )}>{prev}</p>
            </div>
        </Link>
    )
}

export default Page
