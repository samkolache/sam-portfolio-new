import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='flex justify-between border-t border-white border-opacity-10 p-8'>
        <Link href = "/">
          <Image
          src = '/logo.svg'
          alt='Logo for Sam Kotecha portfolio site'
          width={74}
          height={29}
          />
        </Link>
        <ul className='flex gap-5 text-sm'>
            <li>
              <a href = "https://www.linkedin.com/in/sameer-z-kotecha/" className='text-white'>LinkedIn</a>
            </li>
            <li>
              <a href = "https://github.com/samkolache" className='text-white'>Github</a>
            </li>
            <li>
              <a href = "https://www.linkedin.com/in/sameer-z-kotecha/" className='text-white'>Resume</a>
            </li>
          </ul>
    </div>
  )
}

export default Footer
