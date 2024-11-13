'use client'
import { motion } from "framer-motion";
import React from "react";

const SkillShowcase = () => {
  const skills = ["Website Design & Development", "UI/UX", "CMS", "Accessibility", "SEO"];

  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center border border-brand border-opacity-15 max-w-lg rounded-lg py-2">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }} // Slower speed with longer duration
      >
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className="text-[14px] text-white mx-4">
            <div className="flex items-center gap-2">
              <div className="w-[5px] h-[5px] bg-brand"></div>
              {skill}
            </div>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillShowcase;
