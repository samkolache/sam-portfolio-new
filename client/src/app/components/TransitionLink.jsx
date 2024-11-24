'use client'
import React, {useContext} from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import Link  from "next/link"
import {useRouter} from "next/navigation"
import "./navbar/navbar.css"
import "../globals.css"
import clsx from 'clsx'
import { usePathname } from 'next/navigation'


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

const TransitionLink = ({
    children,
    href,
    ...props
}) => {

    const router = useRouter();
    const pathname = usePathname();
    if (pathname === href) {
      console.log(`Current pathname: ${pathname}, Link href: ${href}`);
    }

    const handleTransition = async (e) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add('page-transition')

         await sleep(500)

        router.push(href)

        await sleep(500)
        body?.classList.remove('page-transition')
    }
   

    const {isDark} = useContext(ThemeContext);

  return (
    <Link 
    onClick={handleTransition}
    href={href} {...props}
    className = {clsx(
      'nav-link',
      {
        'text-brand font-semibold' : pathname === href && isDark,
        'text-brandDark font-semibold' : pathname === href && !isDark,
      },
      {
        'text-white font-light': isDark && pathname !== href, 
        'text-black font-light': !isDark && pathname !== href,
      }
    )}
    >
    {children}
    </Link>
  )
}

export default TransitionLink
