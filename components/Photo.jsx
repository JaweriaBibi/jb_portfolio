"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] flex justify-center items-center'>
      {/* image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className='relative w-full h-full rounded-full overflow-hidden'
      >
        {/* circular image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className='relative w-full h-full rounded-full overflow-hidden'
        >
          {/* Image with circular clipping */}
          <Image 
            src="/jaweria.jpg"
            priority 
            quality={100}
            fill
            alt="Profile Photo"
            className='object-cover rounded-full'
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
