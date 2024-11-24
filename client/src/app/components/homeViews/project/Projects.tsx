'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from './AnimatedBtn'

import clsx from "clsx";
import { ThemeContext } from "@/contexts/ThemeContext";

const Projects = () => {

    const { isDark } = useContext(ThemeContext);

    const gymskiiTech = ["React", "MongoDB", "NextJS", "Tailwind", "AuthJS"]
    const scratchTech = ["React", "NextJS", "Tailwind", "Sandpack"]

    return (
        <section className='max-w-6xl mx-auto py-24 px-4'>
            <h2 className={clsx(
                "text-4xl mb-8 text-center font-medium",
                {
                    "text-white": isDark,
                    "text-black": !isDark
                }
            )}>Projects</h2>

            <div className='grid md:grid-cols-2 gap-16'>

               
                <ProjectCard 
                img = "/gymskii-img.png" 
                title = {<>gym<span className='text-[#3175b1]'>skii</span></>} 
                tech = {gymskiiTech}
                progress = {<><span className='text-brand font-semibold'>Currently working on: </span>Creating the dashboard for users to track and visualize their data (learning Recharts).</>}
                pageLink = "https://gymskii.com/"
                pageText = "Go to the gymskii site"
                repoLink = "https://github.com/samkolache/gymskii"
                repoText = "View the source code"
                blurb = "Developed the marketing page for gymskii, a fitness-tracking platform designed to help users achieve progressive overload by tracking and visualizing gym performance data. gymskii allows users to log their weekly gym data and track their progress through a central dashboard, which includes dynamic graphics and statistics to help users train more effectively and stay motivated. The current site allows you to log in/sign out using Auth.js."
                />

                {/* Card 2 */}
                <ProjectCard 
                img = "/scratch-img.png" 
                title = 'scratchToReact' 
                tech = {scratchTech}
                progress = {<><span className='text-brand font-semibold'>Currently working on: </span>Creating the React tutorials for current vanilla components.</>}
                pageLink = "https://scratch-to-react.vercel.app/"
                pageText = "Go to the scratchToReact site"
                repoLink = "https://github.com/samkolache/scratchToReact"
                repoText = "View the source code"
                blurb = "Developed scratchToReact to help friends interested in web development, making it a valuable project for honing my skills in vanilla JavaScript and React components. The current site shows tutorials on basic web components in vanilla HTML, CSS, and JS. I try to add a lesson a day to continue learning and helping others. The site’s code previews are made using Sandpack, providing an interactive learning experience. I plan to expand from web components into all types of tutorials for web development."
                />
            </div>

            <div className='flex justify-center mt-12'>
                <Link href="/experience" className={clsx(
                    'text-white px-4 py-2 rounded-lg font-semibold',
                    {
                        "bg-brand": isDark,
                        "bg-brandDark": !isDark

                    }
                )}>
                    Learn more about my experience
                </Link>
            </div>
        </section>
    )
}

const ProjectCard = ({img, title, tech, blurb, progress, pageLink, pageText, repoLink, repoText} ) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className='space-y-8'>

            {/* Image */}
            <Image
                src={img}
                alt='screenshot of scratchToReact'
                width={550}
                height={500}
                className='rounded-lg w-full h-auto shadow-md'
            />

            {/* Information */}
            <div className='space-y-4'>
                <h3 className ={clsx(
                    'text-3xl font-bold text-center',
                    {
                        "text-white" : isDark,
                        "text-black" : !isDark
                    }
                )}> {title} </h3>
                <div className = {clsx(
                    'flex flex-wrap gap-3 justify-center',
                    {
                        "text-white" : isDark,
                        "text-black" : !isDark
                    }
                )}>
                    <TechItems techs={tech}/>
                </div>
                <p className = {clsx(
                    'text-sm md:text-base',
                    {
                        "text-white" : isDark,
                        "text-black" : !isDark
                    }

                )}>{blurb}</p>
                <div className = {clsx(
                    'rounded-md p-3 text-sm md:text-base',
                    {
                        "text-white border border-white" : isDark,
                        "text-black border border-black" : !isDark
                    }

                )}>{progress}</div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col items-center space-y-4'>
                <AnimatedBtn href = {pageLink} innerTxt = {pageText} />
                <AnimatedBtn href = {repoLink} innerTxt = {repoText} />
            </div>

        </div>
    )
}

const TechItems = ({techs}) => {
    const { isDark } = useContext(ThemeContext);
    return (
        <>
        {techs.map((tech, index) => (
            <p  
            key = {index}
            className = 
            {clsx(
                'py-2 px-3 rounded-md border border-white border-opacity-50 text-sm',
                {
                "border-white" : isDark,
                "border-black" : !isDark
                }
            )}>
            {tech}
            </p>
        ))}
        </>
        
    )
}



export default Projects
