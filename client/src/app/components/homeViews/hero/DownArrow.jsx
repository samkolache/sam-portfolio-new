'use client'
import { motion } from "framer-motion";
import React, {useContext} from "react";
import Image from "next/image";
import clsx from "clsx";

import { ThemeContext } from "@/contexts/ThemeContext";

import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";



const DownArrow = () => {

  const scrollToSection = () => {
    const section = document.getElementById('introduction');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const {isDark} = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }} // Scales up to 1.2 and back down
      transition={{
        duration: 1.5, // Controls speed of pulsing
        repeat: Infinity, // Loop the animation
        ease: "easeInOut",
      }}
      onClick={scrollToSection}
    >
      <ArrowDownCircleIcon className = {clsx(
        "w-24 h-24 cursor-pointer",
        {
          'text-brand' : isDark,
          'text-brandDark': !isDark
        }
      )} />
    </motion.div>
  );
};

export default DownArrow;
