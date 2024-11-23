'use client'
import { motion } from "framer-motion";
import React, {useContext} from "react";

import { ThemeContext } from '@/contexts/ThemeContext';
import clsx from 'clsx';
 
const SkillShowcase = () => {
  const skills = ["Website Design & Development", "UI/UX", "CMS", "Accessibility", "SEO"];
  const {isDark} = useContext(ThemeContext)

  return (
    <div className = {clsx(
      "overflow-hidden whitespace-nowrap flex items-center border  border-opacity-20 max-w-full md:max-w-lg rounded-lg py-3 px-4",
      {
        "border-brand" : isDark,
        "border-brandDark" : !isDark
      }
    )}>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Slowed down slightly for readability
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className = {clsx(
            "text-sm md:text-base mx-2 md:mx-4",
            {
              "text-white": isDark,
              "text-black" : !isDark
            }
          )}>
            <div className="flex items-center gap-2">
              <div className = {clsx(
                "w-[4px] h-[4px] md:w-[5px] md:h-[5px rounded-full",
                {
                  "bg-brand": isDark,
                  "bg-brandDark" : !isDark
                }
              )}></div>
              {skill}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillShowcase;
