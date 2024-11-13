import React from 'react'
import { ClockIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import "../../globals.css"

const page = () => {
  return (
    <>
     <div className='p-16'>
     <div className='color-blur-spotify absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
      <section className='space-y-12'>
        <div className='space-y-4'>
          <p className='text-sm text-white'>UI/UX & Web Dev</p>
          <h1 className='text-4xl text-white max-w-4xl'>Essential Tips for Designing Accessible Websites for All</h1>
          <div className='flex gap-4'>
            <ClockIcon className='w-5 h-5 text-white'/>
            <p className='text-sm text-white'>5 min read</p>
          </div>
        </div>
        
        <p className='text-[#d1d5db] max-w-4xl'>In today's digital world, making sure your website is accessible for all is cruicial for 
            reaching a broader audience. Let's go over a few quick tips to make sure your website is usuable by everyone, including people
            with disabiliteis. 
        </p>
      </section>
      <Image 
      src = "/acc-image.jpg"
      alt='UI design graphic'
      width={700}
      height={100}
      className='mt-4'
      />
      <section className='space-y-6'>
        <div className='max-w-4xl space-y-6 mt-4'>
          <h2 className="text-3xl text-white">Semantic HTML</h2>
          <p className='text-[#d1d5db]'>Introduced in 2014 with HTML5, semantic HTML is HTML code that uses tags effecetviley to describe the purpose
            of different elements. Some of these tags include &lt;header&gt;, &lt;footer&gt;, all  &lt;h&gt; tags, and the  &lt;p&gt; tag. These tag tell both the
            humans and browsers its purpose, allowing both web browsers and assitive technolgiies navigate your site better. 
          </p>
          <p className='text-[#d1d5db]'>
            There is also non-semantic HTML elements, which include the  &lt;div&gt; tag and the  &lt;span&gt; tag. These tags give no information to the computer
            why they are there. These tags should only be used for styling purposes's, we should try to be as semantic as we can.
          </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Provide Text Alternatives</h2>
        <p className='text-[#d1d5db]'>Whenever you create an image in your HTML code, you will notice the "alt" tag as one of the attributes. This 3-4 world
            attribute describes what the image is. If you have a person riding a bike, the alt tag could simply be "man riding a bike". This once again is another elements
            that allows people with asssitive techinoliges to use your site. Once the technology gets to your image, they will read out loud what your alt tag is. Never make
            an image without an alt tag!
        </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Conclusion</h2>
        <p className='text-[#d1d5db]'>Creating a great UI/UX for AI is more than aesthetics, it's about creating an experience that allows the user to understand and trust the model
          As AI continues to get faster and more intelligent, thoughtful design will play a massive role in how much the user can take advatnage of these great tools.
        </p>
        </div>
      </section>

        
    </div>
    </>
   
  )
}

export default page
