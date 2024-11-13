import React from 'react'
import Image from 'next/image'
import "../globals.css";

const page = () => {
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto max-w-7xl py-20 px-4 relative">
            <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-6xl font-bold text-white">about.</h1>
                <p className="text-white text-3xl">I am a web developer based in Houston, Texas</p>
                <p className="text-white text-lg  mx-auto ">
                    Since 2020, I've enjoyed designing and developing websites both as a passion and a career choice. Even earlier, I used to love drawing, even though I was terrible and would trace everything. With website design, I feel like I'm back to drawing—only now, I'm creating freely without needing a guide to trace.
                </p>
                <p className="text-white text-lg mx-auto">
                    A big passion of mine is working out/fitness, I try my best not to take more than one rest day a week. I one day want to own both a fitness product
                    & a gym, building both with the goal of improving how everyone views exercise. That's a big reason why  I created my website <span className='font-bold'>gym<span className='text-[#3175b1]'>skii</span></span>,
                    I want to start by improving how people track and act on their progress!
                </p>
                <p className='text-white tg-lg mx-auto'>Check out some of my blogs on <span className='font-bold'>gym<span className='text-[#3175b1]'>skii</span></span> <a href='https://gymskii.com/blog' className='text-brand underline'>here</a> </p>
            </div>
            <div className="flex justify-center">
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

export default page
