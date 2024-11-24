'use client'
import React from 'react'
import Image from 'next/image'
import "../globals.css";
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import clsx from 'clsx';

const Page = () => {

    const {isDark} = useContext(ThemeContext);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto max-w-7xl py-20 px-4 relative">
                <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
                
                <div className="space-y-6 text-center md:text-left">
                    <h1 className = {clsx(
                        "text-4xl md:text-6xl font-bold",
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark
                        }
                    )}>about.</h1>
                    <p className = {clsx(
                        " text-xl md:text-3xl", 
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark
                        }
                    )}>I am a web developer based in Houston, Texas.</p>
                    <p className = {clsx(
                        "text-base md:text-lg mx-auto md:mx-0",
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark
                        }
                    )}>
                        Since 2020, I've enjoyed designing and developing websites both as a passion and a career choice. In the past, I loved drawing, even though I wasn't very good and would trace everything. With website design, I feel like I'm back to drawing—only now, I'm creating freely without needing a guide to trace.
                    </p>
                    <p className = {clsx(
                        "text-base md:text-lg mx-auto md:mx-0",
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark
                        }
                    )}>
                        A big passion of mine is working out/fitness. I try my best not to take more than one rest day a week. One day, I want to own both a fitness product & a gym, building both to improve how everyone views exercise. That's a big reason why I created my website <span className='font-bold'>gym<span className='text-[#3175b1]'>skii</span></span>. I want to start by improving how people track and act on their progress!
                    </p>
                    <p className = {clsx(
                        "text-base md:text-lg mx-auto md:mx-0",
                        {
                            "text-white" : isDark,
                            "text-black" : !isDark
                        }
                    )}>Check out some of my blogs on <span className='font-bold'>gym<span className='text-[#3175b1]'>skii</span></span> <a href='https://gymskii.com/blog' className = {`${isDark ? 'text-brand' : 'text-brandDark'} underline`}>here.</a> </p>
                </div>

                <div className="flex justify-center md:block">
                    <Image
                        src="/sam.png"
                        alt="Picture of Sam Kotecha"
                        width={500}
                        height={500}
                        className="rounded-lg hidden"
                    />
                </div>
            </div>
        </>
    )
}

export default Page
