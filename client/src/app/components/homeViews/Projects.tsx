import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Projects = () => {
    return (
        <section className='max-w-6xl mx-auto py-24'>
            <h2 className="text-4xl text-white mb-4 text-center font-medium">Projects</h2>
            <div className='flex justify-between py-16'>

                {/* card 1 */}
                <div className='max-w-[550px] space-y-10'>

                    {/* Image */}
                    <Image
                        src="/gymskii-img.png"
                        alt='screenshot of gymskii'
                        width={550}
                        height={500}
                        className='rounded-lg'
                    />

                    {/* Information */}
                    <div className='space-y-5'>
                        <h3 className='text-3xl text-white font-bold text-center'> gym<span className='text-[#3175b1]'>skii</span> </h3>
                        <div className='flex gap-5 text-white justify-center'>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 bg-opacity-60 text-sm'>React</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 bg-opacity-60 text-sm'>MongoDB</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50  text-sm'>NextJS</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 text-sm'>TailwindCSS</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 text-sm'>AuthJS</p>
                        </div>
                        <p className='text-white'>Developed the marketing page for gymskii, a fitness tracking platform designed to help
                            users achieve progressive overload by tracking and visualizing gym performance data. gymskii allows users to log
                            their weekly gym data and track their progress through a central dashboard, which includes dynamic graphics and
                            statistics to help users train more effectively and stay motivated. The current site allows you to log in/sign out
                            using Auth.js.
                        </p>
                        <div className='text-white border rounded-md p-2'>
                            <span className='text-brand font-semibold'>Currently working on:  </span>Creating the dashboard for users to track and visualize their data(learning GraphQL and Apollo)
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col items-center space-y-5'>
                        <a href='https://gymskii.com/'
                           className='border border-brand border-opacity-35 rounded-lg text-white px-4 py-2 text-lg '
                           target="_blank"
                        >Go to the gymskii site</a>
                        <a href='https://github.com/samkolache/gymskii'
                           className='border border-brand border-opacity-35 rounded-lg text-white px-4 py-2 text-lg '
                           target="_blank"
                        >View the source code</a>
                    </div>



                </div>

                {/* Card 2 */}
                <div className='max-w-[550px] space-y-10'>

                    {/* Image */}
                    <Image
                        src="/scratch-img.png"
                        alt='screenshot of gymskii'
                        width={550}
                        height={500}
                        className='rounded-lg'
                    />

                    {/* Information */}
                    <div className='space-y-5'>
                        <h3 className='text-3xl text-white font-bold text-center'> scratchToReact </h3>
                        <div className='flex gap-5 text-white justify-center'>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 bg-opacity-60 text-sm'>React</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50  text-sm'>NextJS</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 text-sm'>TailwindCSS</p>
                            <p className='py-2 px-4 rounded-md border border-white border-opacity-50 text-sm'>Sandpack</p>
                        </div>
                        <p className='text-white'>Developed scratchToReact to help friends interested in web development,
                            making it a valuable project for honing my skills in vanilla JavaScript and React components. I aim to
                            expand it into a platform where users can enhance their web development abilities through
                            different web coding challenges. The site’s code previews are made using Sandpack, providing an interactive learning
                            experience.
                        </p>
                        <div className='text-white border rounded-md p-2'>
                            <span className='text-brand font-semibold'>Currently working on: </span> Creating the React tutorials for current vanilla components
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col items-center space-y-5'>
                        <a href='https://scratch-to-react.vercel.app/'
                           className='border border-brand border-opacity-35 rounded-lg text-white px-4 py-2 text-lg '
                           target="_blank"
                        >Go to the scratchToReact site</a>
                        <a href='https://github.com/samkolache/scratchToReact'
                           className='border border-brand border-opacity-35 rounded-lg text-white px-4 py-2 text-lg '
                           target="_blank"
                        >View the source code</a>
                    </div>



                </div>
            </div>
            <div className='flex justify-center'>
                <Link href = "/experience" className='text-white px-4 py-2 bg-brand rounded-lg font-semibold'>Learn more about my experience</Link>
            </div>
            
        </section>
    )
}

export default Projects
