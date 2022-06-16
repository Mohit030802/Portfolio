import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohit Kumar Dubey</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>

           <p className=' text-[#8892b0]'> I'm a Full stack Developer and a UI/UX designer
                specializing in building (and occasionally 
                designing) digital experiences.Currently, I'm focused on 
                building resposive full stack web application
                </p>
               <div>
                <button className='text-white group border-2 py-3 px-6 flex items-center my-2 hover:bg-white hover:border-white hover:text-black'>
                View Work
                    <span className='group-hover:rotate-90'>
                    <HiArrowNarrowRight className='ml-2'/>

                    </span>
                </button>
            </div>

        </div> 
      
    </div>
  )
}

export default Home
