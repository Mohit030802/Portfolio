import React, { useRef } from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import GithibImg from '../assets/github.png'
import Figma from '../assets/figma.svg'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref}  style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} className='w-full h-screen text-gray-300'>
            <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 inline'>Skills</p>
                    <p className='py-4'>// These are technologies I've worked with</p>
                </div>
                <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={HTML} alt="Html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={CSS} alt="Html icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={Javascript} alt="Html icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={ReactImg} alt="Html icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={Node} alt="Html icon" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={Tailwind} alt="Html icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={GithibImg} alt="Html icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto' src={Figma} alt="Html icon" />
                        <p className='my-4'>FIGMA</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
