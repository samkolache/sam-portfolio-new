'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import "../globals.css";

const Page = () => {
    const [selected, updateSelected] = useState('spotify');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative py-20">
            <div
                className={clsx(
                    "absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]",
                    { "color-blur-spotify": selected === 'spotify' },
                    { "color-blur": selected === 'careerCertified' },
                    { "color-blur-uh": selected === 'uh' }
                )}
            ></div>
            <div className="space-y-10 px-16">
                <h1 className="text-6xl font-bold text-white">experience.</h1>
                {["careerCertified", "spotify", "uh"].map((job) => (
                    <motion.div
                        key={job}
                        onClick={() => updateSelected(job)}
                        initial={{ scale: 1 }}
                        animate={{
                            scale: selected === job ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                            duration: 1.5, // Slows down the pulsate effect
                            ease: "easeInOut",
                            repeat: selected === job ? Infinity : 0,
                            repeatType: "reverse",
                        }}
                        className="cursor-pointer"
                    >
                        <h2 className={clsx(
                            "text-2xl font-bold",
                            job === "careerCertified" && "text-[#523466]",
                            job === "spotify" && "text-[#1ED760]",
                            job === "uh" && "text-[#C8102E]"
                        )}>
                            {job === "careerCertified" ? "Career Certified" : job === "spotify" ? "Spotify" : "The University of Houston"}
                        </h2>
                        <h3 className="text-xl text-white font-medium">
                            {job === "careerCertified" && "UI/UX Intern"}
                            {job === "spotify" && "Systems Administrator Intern"}
                            {job === "uh" && "Student Front-end Developer"}
                        </h3>
                        <h4 className="text-lg text-white">
                            {job === "careerCertified" && "May 2024 - December 2024"}
                            {job === "spotify" && "May 2023 - August 2023"}
                            {job === "uh" && "June 2022 - May 2024"}
                        </h4>
                    </motion.div>
                ))}
            </div>
            <div className="py-12 pr-16">
                {/* Key attribute here helps re-trigger the fade-in animation on selection change */}
                <JobInformation key={selected} selected={selected} />
            </div>
        </div>
    );
};

const JobInformation = ({ selected }) => {
    const jobData = {
        careerCertified: {
            resp: [
                "Conducted UX research and presented design improvements for a CE Shop brand website, AHIT, tailoring user experiences to align with specified personas and increasing user engagement by 20%",
                "Developed a comprehensive 23-page UX case study featuring Figma mockups and wireframes, pinpointing user pain points and identifying opportunities to enhance conversions",
                "Assisted in the migration of content from Drupal to Contentful CMS, successfully creating pages and CTAs while ensuring 99% data retention"
            ],
            tools: [
                { name: "Contentful", img: "/CONTENTFUL.svg" },
                { name: "Figma", img: "/FIGMA.svg" },
                { name: "Miro", img: "/MIRO.svg" },
            ]
        },
        spotify: {
            resp: [
                "Streamlined daily website setup with up to 5 consent management protocol requests using OneTrust, ensuring legal data compliance and improving internal and external developer support",
                "Developed a React web application for the OneTrust testing environment, enabling real-time testing of different cookie banners",
                "Set up a comprehensive OneTrust testing environment, facilitating efficient testing of 15 different cookie banners for accuracy, functionality, and appearance",
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
                "Utilized HTML, CSS, and JavaScript to create and edit University webpages via a content management system, enhancing online presence and overall reputation",
                "Migrated 50 web pages from a legacy CMS to the current platform, ensuring 99% accurate content transfer and site functionality ",
                "Lead in the implementation of engaging University events across 10 various websites, enriching user experience and awareness of campus activities",
                "Consistently troubleshooted over 15 website bugs monthly, upholding a smooth and trouble-free user experience "
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
            className="bg-[#0E101B] bg-opacity-77 space-y-5 rounded-lg max-w-8xl p-6"
        >
            <h2 className="text-white text-2xl font-bold">Job Responsibilities:</h2>
            <ul className="list-disc text-white">
                {jobInfo.resp.map((resp, index) => (
                    <li key={index} className="mt-2">{resp}</li>
                ))}
            </ul>
            <div className="p-4">
                <h2 className="text-white text-2xl font-bold">Skills & Tools</h2>
                <div className="flex justify-center gap-6 mt-2">
                    {jobInfo.tools.map((tool, index) => (
                        <div key={index} className="flex gap-2 py-2 px-8 items-center justify-center border border-white border-opacity-30 rounded-md">
                            <Image src={tool.img} alt={tool.name} width={30} height={30} />
                            <p className="text-white text-sm">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
