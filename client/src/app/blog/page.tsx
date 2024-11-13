import { div } from 'framer-motion/client'
import React from 'react'
import "../globals.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className='py-20'>
        <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
        <h1 className="text-6xl pl-16 font-bold text-white">blog.</h1>

        {/* Blog Container */}
        <div className="flex flex-wrap justify-center space-x-4 p-10">
            <BlogPreview link = "/blog/ui-in-ai" title="How to Design UI/UX for AI Services and products" cat="UI/UX & AI - 5 min read" prev="How can we design AI products to be easy to use for all, what components can make these tools more accessible?" />
            <BlogPreview link = "/blog/accessible" title="Essential Tips for Designing Accessible Websites for all" cat="UI/UX & Web Dev - 5 min read" prev="From screen readers to text-to-speech software, here are some tips to make your website accessible to all" />
        </div>

    </div>
  )
}



const BlogPreview = ({title, cat, prev,link}) => {
    return (
        <>
         <Link href = {link} className='cursor-pointer'>
         <div className='m-4 max-w-[600px] space-y-3'>
            <div className='flex flex-col spae-y-1'>
                <h2 className='text-2xl text-white font-medium'>{title}</h2>
                <p className='text-white font-light'>{cat}</p>
            </div>
            
            <p className="text-lg text-white font-light">{prev}</p>
        </div>
         </Link>
        
        </>
       
    )
}


export default page
