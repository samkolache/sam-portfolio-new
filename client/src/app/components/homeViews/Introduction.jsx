'use client'
import React, {useContext} from 'react';
import Image from "next/image";

import { ThemeContext } from '@/contexts/ThemeContext';
import clsx from 'clsx';

const Introduction = () => {
  const {isDark} = useContext(ThemeContext)



  return (
    <section className='py-16 md:py-24 max-w-6xl mx-auto px-4' id='introduction'>
      <h2 className = {clsx(
        "text-3xl md:text-4xl mb-4 text-center font-medium",
        {
          "text-white": isDark,
          "text-black": !isDark
        }
      )}>A bit about me</h2>

      <div className='space-y-8'>
        <div>
          <h3 className = {clsx(
            "text-2xl md:text-3xl font-medium mb-4",
            {
              "text-brand": isDark,
              "text-brandDark": !isDark
            }
          )}>Introduction</h3>
          <p className = {clsx(
            "text-base md:text-lg",
            {
              "text-white": isDark,
              "text-black": !isDark
            }
          )}>
            I'm a recent graduate from the University of Houston—go Coogs! I have a strong passion for all things 
            front-end development and aspire to build a long-term career in this field. Beyond the technical things, I enjoy working out, 
            cooking, and reading. I just started reading "The Design of Everyday Things!"
          </p>
          <p className = {clsx(
            "mt-3 mb-4 text-base md:text-lg",
            {
              "text-white": isDark,
              "text-black": !isDark
            }
          )}>
            Right now, I am diving deep into some research on UI/UX design for AI tools. I want to understand how to create a more transparent and human-centered 
            experience that makes AI interactions more accessible.
          </p>
        </div>

        <div>
          <h3 className = {clsx(
            "text-2xl md:text-3xl font-medium mb-4",
            {
              "text-brand": isDark,
              "text-brandDark": !isDark
            }
          )}>Skills</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SkillContainer />
            <FrameworkContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillContainer = () => {
  const {isDark} = useContext(ThemeContext)
  const tech = [
    { name: "HTML", img: "/HTML.svg" },
    { name: "CSS", img: "/CSS.svg" },
    { name: "JavaScript", img: "/JS.svg" },
    { name: "TypeScript", img: "/TYPESCRIPT.svg" },
    { name: "Python", img: "/PYTHON.svg" },
    { name: "SQL", img: "/SQL.svg" }
  ];

  return (
    <div className="p-4 rounded-lg max-w-xs md:max-w-sm">
      <h3 className = {clsx(
        "text-lg md:text-xl font-medium text-center mb-4",
        {
          "text-white": isDark,
          "text-black" : !isDark
        }
      )}>Programming Languages</h3>
      <div className="grid grid-cols-3 gap-4">
        {tech.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const FrameworkContainer = () => {
  const tools = [
    { name: "React", img: "/REACT.svg" },
    { name: "NextJS", img: "/NEXT.svg" },
    { name: "Express", img: "/EXPRESS.svg" },
    { name: "MongoDB", img: "/MONGO.svg" },
    { name: "Node.js", img: "/NODE.svg" },
    { name: "Tailwind", img: "/TAILWIND.svg" },
    { name: "Bootstrap", img: "/BOOTSTRAP.svg" },
    { name: "WordPress", img: "/WORDPRESS.svg" },
    { name: "Contentful", img: "/CONTENTFUL.svg" },
    { name: "Figma", img: "/FIGMA.svg" },
    { name: "Miro", img: "/MIRO.svg" },
    { name: "Framer", img: "/FRAMER.svg" }
  ];
  const {isDark} = useContext(ThemeContext)

  return (
    <div className="p-4 rounded-lg max-w-xs md:max-w-md">
      <h3 className = {clsx(
        "text-lg md:text-xl font-medium text-center mb-4",
        {
          "text-white": isDark,
          "text-black" : !isDark
        }
      )}>Frameworks & Tools</h3>
      <div className="grid grid-cols-3 gap-4">
        {tools.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ skill }) => {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className = {clsx(
      "flex flex-col items-center justify-center bg-opacity-77 rounded-lg p-3 md:p-4 w-[90px] md:w-[100px] h-[90px] md:h-[100px] text-center shadow-md hover:shadow-lg transition-shadow duration-200",
      {
        "bg-[#0E101B]" : isDark,
        "bg-[#E4E6F1]" : !isDark
      }
    )}>
     <Image src={skill.img} alt={skill.name} width={30} height={30} className="mb-2" />
      <p className = {clsx(
        "text-xs md:text-sm truncate",
        {
          "text-white": isDark,
          "text-black" : !isDark
        }
      )}>{skill.name}</p>
  </div>
  )
  
};

export default Introduction;
