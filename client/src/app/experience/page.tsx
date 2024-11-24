'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import "../globals.css";

import { ThemeContext } from '@/contexts/ThemeContext';

const Page = () => {
    const [selected, updateSelected] = useState('spotify');
    const {isDark} = useContext(ThemeContext)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative py-20 px-4 md:px-16">
            <div
                className={clsx(
                    "absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]",
                    { "color-blur-spotify": selected === 'spotify' },
                    { "color-blur": selected === 'careerCertified' },
                    { "color-blur-uh": selected === 'uh' }
                )}
            ></div>
            <div className="space-y-10">
                <h1 className = {clsx(
                    "text-4xl md:text-6xl font-bold",
                    {
                        "text-white" : isDark,
                        "text-black" : !isDark,
                    }
                )}>experience.</h1>
                {["careerCertified", "spotify", "uh"].map((job) => (
                    <motion.div
                        key={job}
                        onClick={() => updateSelected(job)}
                        initial={{ scale: 1 }}
                        animate={{
                            scale: selected === job ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: selected === job ? Infinity : 0,
                            repeatType: "reverse",
                        }}
                        className="cursor-pointer"
                    >
                        <h2 className={clsx(
                            "text-2xl md:text-2xl font-bold",
                            job === "careerCertified" && "text-[#523466]",
                            job === "spotify" && "text-[#1ED760]",
                            job === "uh" && "text-[#C8102E]"
                        )}>
                            {job === "careerCertified" ? "Career Certified" : job === "spotify" ? "Spotify" : "The University of Houston"}
                        </h2>
                        <h3 className = {clsx(
                            "text-lg md:text-xl font-medium",
                            {
                                "text-white" : isDark,
                                "text-black" : !isDark
                            }

                        )}>
                            {job === "careerCertified" && "UI/UX Intern"}
                            {job === "spotify" && "Systems Administrator Intern"}
                            {job === "uh" && "Student Front-end Developer"}
                        </h3>
                        <h4 className = {clsx(
                            "text-base md:text-lg",
                            {
                                "text-white" : isDark,
                                "text-black" : !isDark
                            }
                        )}>
                            {job === "careerCertified" && "May 2024 - December 2024"}
                            {job === "spotify" && "May 2023 - August 2023"}
                            {job === "uh" && "June 2022 - May 2024"}
                        </h4>
                    </motion.div>
                ))}
            </div>
            <div className="py-12 pr-4 md:pr-16">
                <JobInformation key={selected} selected={selected} />
            </div>
        </div>
    );
};

const JobInformation = ({ selected }) => {

    const {isDark} = useContext(ThemeContext)
    const jobData = {
        careerCertified: {
            resp: [
                "Created and refined product mockups in Figma, including a student calendar, using insights from user interviews to align design features with user expectations",
                "Conducted UX research and proposed design enhancements for the CE Shop brand website (AHIT), crafting tailored user experiences aligned with key personas to boost user engagement.",
                "Assisted in migrating content from Drupal to Contentful CMS, creating pages and CTAs with a focus on maintaining 99% data retention and content consistency."
            ],
            tools: [
                { name: "Contentful", img: "/CONTENTFUL.svg" },
                { name: "Figma", img: "/FIGMA.svg" },
                { name: "Miro", img: "/MIRO.svg" },
            ]
        },
        spotify: {
            resp: [
                "Built a NextJS web application for the OneTrust testing environment, facilitating real-time testing of various cookie banners.",
                "Established a robust OneTrust testing environment to streamline testing of 15 unique cookie banners, ensuring accuracy, functionality, and consistent visual design.",
                "Created a customized legal workflow solution for the Megaphone podcast team, using DocuSign, resulting in a 15% reduction in time spent in the contract lifecycle management process"
            ],
            tools: [
                { name: "React", img: "/REACT.svg" },
                { name: "Typescript", img: "/TYPESCRIPT.svg" },
                { name: "NextJS", img: "/NEXT.svg" },
                { name: "Express", img: "/EXPRESS.svg" },
            ]
        },
        uh: {
            resp: [
                "Developed and optimized University webpages using HTML, CSS, and JavaScript within a content management system, enhancing accessibility and reinforcing the University’s online presence and reputation.",
                "Migrated 50 web pages from a legacy CMS to a modern platform, ensuring precise content transfer and seamless functionality for an uninterrupted user experience.",
                "Proactively resolved 10+ website bugs each month, ensuring a seamless and reliable user experience."
            ],
            tools: [
                { name: "HTML", img: "/HTML.svg" },
                { name: "CSS", img: "/CSS.svg" },
                { name: "Javascript", img: "/JS.svg" },
                { name: "Bootstrap", img: "/BOOTSTRAP.svg" },
            ]
        }
    };

    const jobInfo = jobData[selected];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className = {clsx(
                "bg-opacity-77 space-y-5 rounded-lg max-w-8xl p-6",
                {
                    "bg-[#0E101B]" : isDark,
                    "bg-[#E4E6F1]" : !isDark
                }
            )}
        >
            <h2 className = {clsx(
                "text-2xl font-bold",
                {
                    "text-white" : isDark,
                    "text-black": !isDark
                }
            )}>Job Responsibilities:</h2>
            <ul className = {clsx(
                "list-disc pl-5",
                {
                    "text-white" : isDark,
                    "text-black": !isDark
                }
            )}>
                {jobInfo.resp.map((resp, index) => (
                    <li key={index} className="mt-2">{resp}</li>
                ))}
            </ul>
            <div className="p-4">
                <h2 className = {clsx(
                    "text-2xl font-bold",
                    {
                        "text-white" : isDark,
                        "text-black": !isDark
                    }
                )}>Skills & Tools</h2>
                <div className="grid grid-cols-2 sm:flex sm:justify-center gap-6 mt-4">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className = {clsx(
                            "flex gap-2 py-2 px-8 items-center justify-center border  border-opacity-30 rounded-md",
                            {
                                "border-white" : isDark,
                                "border-black" : !isDark
                            }
                        )}>
                            <Image src={tool.img} alt={tool.name} width={30} height={30} />
                            <p className = {clsx(
                                "text-sm",
                                {
                                    "text-white" : isDark,
                                    "text-black": !isDark
                                }
                            )}>{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
