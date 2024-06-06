import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>

          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none flex-1'>
            <span className='text-xl'>FullStack Web Developer</span>
            <h1 className='h1 mb-6'>Hello I'm <br /> <span className='max-w-[500px] mb-9 text-accent'>Jaweria Bibi</span>
            </h1>
            <p className='mb-9 text-white'>
              I excel at crafting elegant digital experiences and am proficient in a wide range of programming languages and technologies. As a professional full-stack developer, I specialize in building robust and scalable applications using React for dynamic front-end development, Next.js for server-side rendering and static site generation, and NestJS for efficient back-end services. My expertise extends to Express for streamlined server-side logic, SQL for powerful database management, and Tailwind CSS for creating beautiful, responsive user interfaces. With a strong foundation in both front-end and back-end development, I deliver comprehensive solutions that meet diverse business needs.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0 flex-shrink-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
