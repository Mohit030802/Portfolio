import React, { useRef } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion, useInView } from 'framer-motion'
import me from '../assets/me.jpeg'

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s"
    }} name='home' className='w-full h-screen '
     >
      <div 
        className='max-w-[1000px] mx-auto flex px-8 gap-8 r h-full' >
        <div className='flex flex-col justify-center items-start'>
          <p 
           className='text-gray-500'>Hi, my name is</p>
          <h1
            className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohit Kumar Dubey</h1>
          <h2
             className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>

          <p
            className=' text-[#8892b0] py-4 max-w-[700px]'> I'm a Full stack Developer and a UI/UX designer
            specializing in building (and occasionally
            designing) digital experiences.Currently, I'm focused on
            building resposive full stack web application
          </p>
          <div
           >
            <Link to="work" smooth={true} duration={500} >
              <button className='text-white group border-2 py-3 px-6 flex items-center my-2 hover:bg-white hover:border-white hover:text-black'>
                View Work
                <span className='group-hover:rotate-90'>
                  <HiArrowNarrowRight className='ml-2' />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className='flex justify-center items-center '>
          <div >

            <div 
              className='absolute bg-white w-[22%] h-[10%] transform rotate-0 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
              
            />
            <div
              className='absolute bg-white w-[22%] h-[10%] transform rotate-45 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
            <div
              className='absolute bg-white w-[22%] h-[10%] transform rotate-90 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
            < div
              className='absolute bg-white w-[22%] h-[10%] transform -rotate-45 z-0 rounded-md shadow-[5px_5px_20px_rgb(204,214,246)]'
            />
          </div>
          <div
            className='flex justify-center items-center z-5 '
          >

            <img className='w-[40%] h-[20%] drop-shadow-2xl  rounded-md shadow-[5px_5px_20px_rgb(204,214,246)] ' src={me} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
