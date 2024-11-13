import { div } from 'framer-motion/client'
import React from 'react'
import "../globals.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className='py-32 relative'>
        <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
        
        <h1 className="text-4xl md:text-6xl pl-8 md:pl-16 font-bold text-white">blog.</h1>

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
    return (
        <Link href={link} className='cursor-pointer'>
            <div className='m-4 max-w-[400px] md:max-w-[600px] space-y-3 bg-opacity-10 bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200'>
                <div className='flex flex-col space-y-1'>
                    <h2 className='text-xl md:text-2xl text-white font-semibold'>{title}</h2>
                    <p className='text-sm md:text-base text-white font-light'>{cat}</p>
                </div>
                <p className="text-base md:text-lg text-white font-light">{prev}</p>
            </div>
        </Link>
    )
}

export default page
