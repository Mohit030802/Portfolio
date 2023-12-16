import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import me from '../assets/me.jpeg'
const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },

};
const Home = () => {
  return (
    <motion.div name='home' className='w-full h-screen '
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}>
      <motion.div variants={fadeInVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.5, duration: 1 }} className='max-w-[1000px] mx-auto flex px-8 gap-8 r h-full' >
        <div className='flex flex-col justify-center items-start'>
          <motion.p variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.5, duration: 1 }} className='text-gray-500'>Hi, my name is</motion.p>
          <motion.h1 variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1, duration: 1 }} className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohit Kumar Dubey</motion.h1>
          <motion.h2 variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.5, duration: 1 }} className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</motion.h2>

          <motion.p variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.5, duration: 1 }} className=' text-[#8892b0] py-4 max-w-[700px]'> I'm a Full stack Developer and a UI/UX designer
            specializing in building (and occasionally
            designing) digital experiences.Currently, I'm focused on
            building resposive full stack web application
          </motion.p>
          <motion.div variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.75, duration: 1 }}>
            <Link to="work" smooth={true} duration={500} >
              <button className='text-white group border-2 py-3 px-6 flex items-center my-2 hover:bg-white hover:border-white hover:text-black'>
                View Work
                <span className='group-hover:rotate-90'>
                  <HiArrowNarrowRight className='ml-2' />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        <div className='flex justify-center items-center '>
          <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 2 }} variants={fadeInVariants}>

            <motion.div initial='hidden'
            animate='visible'
            transition={{ delay: 0.5, duration: 2 }} variants={fadeInVariants}
              className='absolute bg-white w-[22%] h-[10%] transform rotate-0 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
              
            />
            <motion.div initial='hidden'
            animate='visible'
            transition={{ delay: 0.75, duration: 2 }} variants={fadeInVariants}
              className='absolute bg-white w-[22%] h-[10%] transform rotate-45 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
            <motion.div initial='hidden'
            animate='visible'
            transition={{ delay: 1, duration: 2 }} variants={fadeInVariants}
              className='absolute bg-white w-[22%] h-[10%] transform rotate-90 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
            < motion.div initial='hidden'
            animate='visible'
            transition={{ delay: 1.25, duration: 2 }} variants={fadeInVariants}
              className='absolute bg-white w-[22%] h-[10%] transform -rotate-45 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
          </motion.div>
          <motion.div
            className='flex justify-center items-center z-5 '
          >

            <motion.img className='w-[40%] h-[20%] drop-shadow-2xl  rounded-md shadow-[5px_5px_20px_rgb(204,214,246)] ' variants={fadeInVariants} src={me} alt="" />
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Home
