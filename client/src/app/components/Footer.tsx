import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center border-t border-white border-opacity-10 p-6 md:p-8 space-y-4 md:space-y-0">
      <Link href="/">
        <Image
          src='/logo.svg'
          alt='Logo for Sam Kotecha portfolio site'
          width={74}
          height={29}
        />
      </Link>
      
      <ul className="flex flex-col md:flex-row gap-4 md:gap-5 text-sm items-center">
        <li>
          <a href="https://www.linkedin.com/in/sameer-z-kotecha/" className="text-white hover:underline">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/samkolache" className="text-white hover:underline">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sameer-z-kotecha/" className="text-white hover:underline">Resume</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
