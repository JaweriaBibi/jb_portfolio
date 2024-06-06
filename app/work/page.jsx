"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Link from 'next/link'; // Import Link from Next.js

// Projects data
const projects = [
  {
    num: "1",
    category: "full stack",
    title: "Internship Screening Project",
    description: (
      <ul>
        <li>
          Students, as primary users, interact with the platform to{" "}
          <strong className="text-white">register for internships</strong> and{" "}
          <strong className="text-white">apply during designated open periods</strong>, all within the
          context of their academic curriculum.
        </li>
        <li>
          <strong className="text-white">Teachers</strong> utilize the system to{" "}
          <strong className="text-white">oversee student applications</strong>, provide guidance, and{" "}
          <strong className="text-white">evaluate candidates</strong> based on predefined criteria.
        </li>
        <li>
          <strong className="text-white">Coordinators</strong> play a pivotal role in{" "}
          <strong className="text-white">coordinating</strong> between students, teachers, and
          administrative staff, ensuring <strong className="text-white">smooth workflow management</strong>{" "}
          throughout the internship process.
        </li>
        <li>
          <strong className="text-white">Admins</strong> are responsible for overseeing the entire
          platform, managing user accounts, configuring system settings, and
          ensuring compliance with organizational policies.
        </li>
        <li>
          <strong className="text-white">In-charge personnel</strong>, overseeing specific departments
          or internship batches, play a crucial role in orchestrating internship
          openings, defining selection criteria, and managing overall internship
          operations.
        </li>
        <li>
          <strong className="text-white">Internship openings</strong> are aligned with specific batches,
          ensuring targeted recruitment and efficient resource allocation.
        </li>
        <li>
          Each batch represents a cohort of students at a particular stage of
          their academic journey, allowing for streamlined internship management
          and tailored support for participants.
        </li>
        <li>
          By integrating roles and batch-specific internship openings, this
          project delivers a comprehensive solution for internship management,
          fostering collaboration, transparency, and efficiency across all
          stakeholders involved.
        </li>
      </ul>
    ),
    stack: [
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Material-UI" },
      { name: "Axios" },
      { name: "Express.js" },
      { name: "Nest.js" },
      { name: "MySQL" },
      { name: "Jira" },
      { name: "Trello" },
    ],
    video: "/fyp.mp4", // Ensure this path is correct
  },
  {
    num: "2",
    category: "frontend",
    title: "Portfolio Website",
    description: (
      <ul>
        <li>
          A personal portfolio website built using <strong className="text-white">Next.js</strong> and{" "}
          <strong className="text-white">React</strong>, with <strong className="text-white">motion effects</strong> implemented
          using the <strong className="text-white">Framer Motion</strong> library.
        </li> 
        <li>
          The portfolio showcases the developer's <strong className="text-white">skills</strong>,{" "}
          <strong className="text-white">projects</strong>, and <strong className="text-white">experience</strong> in an{" "}
          <strong className="text-white">interactive</strong> and visually appealing manner.
        </li>
        <li>
          The website is designed to provide information about the developer's{" "}
          <strong className="text-white">background</strong>, <strong className="text-white">projects</strong>, and{" "}
          <strong className="text-white">contact details</strong>, serving as a platform to showcase
          their work and skills to potential employers or clients.
        </li>
      </ul>
    ),
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Framer Motion" },
    ],
    video: "/portfolio.mp4", // Ensure this path is correct
  },
  // Additional projects can be added here if needed
];

const Work = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Swiper */}
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
        >
          {/* Swiper slides */}
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                <div className="relative h-full w-full">
                  <video 
                    src={project.video}
                    className="object-cover h-full w-full"
                    controls
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Project details */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[activeIndex].num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {projects[activeIndex].category} project
              </h2>
              {/* Project description */}
              <div className="text-white/60">
                {projects[activeIndex].description}
              </div>
              <div className="border border-white/20"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            {/* Stack data */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-accent">Using Technology:</h3>
              <ul>
                {projects[activeIndex].stack.map((item, index) => (
                  <li key={index} className="text-lg ">
                    {item.name}
                    {index !== projects[activeIndex].stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Slider buttons */}
        <WorkSliderBtns
          containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22-px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          swiper={swiper}
        />
      </div>
    </motion.section>
  );
};

export default Work;
