import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} name='about' className='w-full h-screen  text-gray-300'>
            <div  className='flex flex-col justify-center items-center w-full h-full' >
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ' >
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Mohit, nice to meet you.Please take a look around</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent web application that improves
                            the lives around me.I am also a UI/UX designer.I am very interested
                            in learning new things and use them to gain more knowledge and experiences.
                            I have done a few internships in the field of web development as a full stack Developer </p>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default About
