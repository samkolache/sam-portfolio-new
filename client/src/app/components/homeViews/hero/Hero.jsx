'use client'
import React, {useContext} from 'react';
import Typewriter from "./Typewriter";
import SkillShowcase from './SkillShowcase';
import DownArrow from './DownArrow'

import { ThemeContext } from '@/contexts/ThemeContext';
import clsx from 'clsx';

const Hero = () => {
  
  const {isDark} = useContext(ThemeContext)

  return (
    <>
      <section className="max-w-6xl text-center py-52 mx-auto">
        <h1 className = {clsx(
          "text-5xl font-bold mb-4",
          {
            "text-white" : isDark,
            "text-black" : !isDark
          }
        )}>Hello, I am Sam Kotecha</h1>
          <div className="min-w-[12ch] text-center"> 
            <Typewriter />
          </div>
          <div className='max-w-lg mx-auto mt-12'>
            <SkillShowcase />
          </div>

          <div 
          className='flex justify-center mt-12'>
            <DownArrow />
          </div>
      </section>
    </>
  );
}

export default Hero;
