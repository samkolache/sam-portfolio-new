'use client'
import { Montserrat } from 'next/font/google';
import "./globals.css";

import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

import {ThemeContext} from '../contexts/ThemeContext'

import clsx from 'clsx';

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeContext.Provider value = {{
      isDark,
      setIsDark 
    }}>
      <html lang="en" className = {clsx(
        {
          "bg-[#02040D]" : isDark,
          "bg-lightBg" : !isDark
        }
      )}>
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main> {/* Main content grows to push footer down */}
        <Footer />
      </body>
      </html>
    </ThemeContext.Provider>
    
  );
}
