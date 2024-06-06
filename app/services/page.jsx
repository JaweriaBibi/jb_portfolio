"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Full Stack Web Developer',
    description: 'As a Full Stack Web Developer, I excel in both front-end and back-end technologies to build comprehensive web applications from scratch. My expertise includes HTML, CSS, JavaScript, and modern frameworks like React and Next.js for front-end development. For the back-end, I am proficient in Node.js, Express, TypeScript, and databases such as MongoDB and SQL, using TypeORM for efficient data management. I am dedicated to delivering high-quality, scalable, and secure web solutions that provide seamless user experiences and meet complex business requirements',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Designer',
    description: 'As a UI/UX Designer specializing in Figma, I create intuitive and engaging user interfaces that enhance user experiences. My skills encompass designing user-centered interfaces, wireframes, and prototypes with Figma, streamlining the design process and improving collaboration. I emphasize usability and aesthetics, ensuring each interaction is smooth and visually appealing. With a strong grasp of user research, interaction design, and visual design principles, I aim to deliver solutions that are both attractive and effective in solving user problems and driving business success.',
    href: ''
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-white/80">{service.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
