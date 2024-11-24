import React, {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TransitionLink from "./TransitionLink"

import clsx from "clsx";
import { ThemeContext } from "@/contexts/ThemeContext";


const Footer = () => {

  const { isDark } = useContext(ThemeContext);

  return (
    <footer className = {clsx(
      "flex flex-col md:flex-row justify-between items-center border-t border-opacity-10 p-6 md:p-8 space-y-4 md:space-y-0",
      {
        "border-white": isDark,
        "border-black" : !isDark
      }
    )}>
      <TransitionLink href="/">
        <Image
          src= {isDark ? '/logo.svg' : '/dark-logo.svg'}
          alt='Logo for Sam Kotecha portfolio site'
          width={74}
          height={29}
        />
      </TransitionLink>
      
      <ul className="flex flex-col md:flex-row gap-4 md:gap-5 text-sm items-center">
        <li>
          <a href="https://www.linkedin.com/in/sameer-z-kotecha/" className = {clsx(
            "hover:underline",
            {
              "text-white" : isDark,
              "text-black" : !isDark
            }
          )}>LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/samkolache" className = {clsx(
            "hover:underline",
            {
              "text-white" : isDark,
              "text-black" : !isDark
            }
          )}>Github</a>
        </li>
        <li>
          <a href="https://samk-resume.tiiny.site/" className = {clsx(
            "hover:underline",
            {
              "text-white" : isDark,
              "text-black" : !isDark
            }
          )}>Resume</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
