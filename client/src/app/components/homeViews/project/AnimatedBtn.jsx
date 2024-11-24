'use client'
import { motion } from "framer-motion";
import React, {useContext} from "react";

import clsx from "clsx";
import { ThemeContext } from "@/contexts/ThemeContext";

const AnimatedBtn = ({href, innerTxt}) => {

  const {isDark} = useContext(ThemeContext);

  return (

    
    <motion.a
        href = {href}
        className = {clsx(
          'relative border border-opacity-80 rounded-lg px-4 py-2 text-lg overflow-hidden',
          {
            "border-brand text-white" : isDark,
            "border-brandDark hover:text-white text-black" : !isDark
          }
        )}
        target="_blank"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
        <motion.div
        className = {clsx(
          "absolute inset-0",
          {
            "bg-brand" : isDark,
            "bg-brandDark" : !isDark

          }
        )}
        style={{ transformOrigin: 'left center' }}
        variants={{
          rest: { scaleX: 0 },         // No fill initially
          hover: { scaleX: 1 }         // Fill on hover
        }}
        transition={{ duration: 0.3 }}
      />
        <span className="relative z-10">{innerTxt}</span>
    </motion.a>
  );
};

export default AnimatedBtn;
