'use client'
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const DownArrow = () => {

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }} // Scales up to 1.2 and back down
      transition={{
        duration: 1.5, // Controls speed of pulsing
        repeat: Infinity, // Loop the animation
        ease: "easeInOut",
      }}
    >
      <Image 
      src="/down-arrow.svg" 
      alt="Pulsating SVG" 
      width={90} 
      height={90}
      className="cursor-pointer" />
    </motion.div>
  );
};

export default DownArrow;
