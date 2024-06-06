"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Import necessary icons
import { FaHtml5, FaCss3, FaJs, FaGit, FaFigma, FaNodeJs, FaTypeScript, FaDatabase, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostman, SiJira } from "react-icons/si";
import { DiNodejs, DiMysql } from "react-icons/di";

// about data
const about = {
  title: 'About Me',
  description: 'A dedicated Full Stack Developer with over a year of experience in delivering high-quality web applications. Skilled in both front-end and back-end development, with a strong focus on creating user-centric and scalable solutions.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'JaweriaBibi Abdullah',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+92) 306-5615796',
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'jaweriabibiofficial@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Urdu',
    },
  ]
};

// experience data
const experience = {
  title: 'My Experience',
  description: 'With a solid background in Full Stack Development, I have contributed to various projects in both academic and professional settings. My experience includes working with renowned platforms like Upwork and Fiverr, where I consistently delivered exceptional results.',
  items: [
    {
      company: "VU Software House",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Upwork",
      position: "Full Stack Developer",
      duration: "2024 - Present",
      profileLink: "https://www.upwork.com/freelancers/~016bc4e81ae8eaeaaf"
    },
    {
      company: "Fiverr",
      position: "Full Stack Developer",
      duration: "2024 - Present",
      profileLink: "https://www.fiverr.com/jaweriabibi04?up_rollout=true"
    }
  ]
};

// education data
const education = {
  title: 'My Education',
  description: 'I hold a Master of Computer Science degree from the Virtual University of Pakistan. My education includes comprehensive projects in back-end development, UI/UX design, and front-end development, providing a well-rounded skill set for tackling diverse challenges in the tech industry.',
  items: [
    {
      institution: "Virtual University Of Pakistan",
      degree: "MCS",
      duration: "2022 - 2024",
    },
    {
      institution: "Virtual University Software House",
      degree: "Back-end Development Project",
      duration: "July 2023 - Nov 2023",
    },
    {
      institution: "Virtual University Software House",
      degree: "UI/UX Designer",
      duration: "Nov 2023 - Jan 2024",
    },
    {
      institution: "Virtual University Software House",
      degree: "Front-end Development Project",
      duration: "Jan 2024 - March 2024",
    },
  ]
};


// Update the skills object
const skills = {
  title: "My Skills",
  description: 'Proficient in a wide range of technologies and tools essential for full stack development. Skilled in HTML, CSS, and JavaScript for frontend development, with expertise in modern frameworks like React, Next.js, and Bootstrap. Additionally, experienced in backend technologies such as Node.js, Express.js, and MySQL, and proficient in version control with Git. Familiar with UI/UX design principles and tools like Figma, and capable of testing and debugging using Postman and Jira.'
,
  frontendSkills: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
  backendSkills: [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <DiNodejs />,
      name: "Express.js",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL",
    },
  ],
  otherSkills: [
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} 
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            <a href={item.profileLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                              {item.position}
                            </a>
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        Proficient in a wide range of technologies and tools essential for full stack development. My skill set includes expertise in HTML, CSS, JavaScript, and modern frameworks like Next.js, as well as backend technologies such as Node.js and TypeScript. Additionally, I have experience in UI/UX design using Figma.
      </p>
    </div>
    {/* Frontend Skills */}
    <div className="skills-container">
      <h4 className="text-2xl font-semibold">Frontend Skills</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.frontendSkills.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </div>
    </div>
    {/* Backend Skills */}
    <div className="skills-container">
      <h4 className="text-2xl font-semibold">Backend Skills</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.backendSkills.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </div>
    </div>
    {/* Other Skills */}
    <div className="skills-container">
      <h4 className="text-2xl font-semibold">Other Skills</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.otherSkills.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </div>
    </div>
  </div>
</TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
