import React, { useRef } from 'react'
import Artbeat from '../assets/Artbeat.png'
import Cloud from '../assets/Cloud.png'
import Projectai from '../assets/projectai.png'
import Netflix from '../assets/Netflix.png'
import Ui1 from '../assets/ui1.png'
import Ui2 from '../assets/ui2.png'
import { motion, useInView } from 'framer-motion'

const Works = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} name='work' className='w-full md:h-screen text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white'>Work</p>
                    <p className='py-6'>// Check out some of my recent projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{
                        backgroundImage: `url(${Artbeat})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.65s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100' >
                            <span className='text-2xl flex justify-center font-bold text-white tracking-wider'>
                                ARTBEAT

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://artbeat.tech/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Netflix})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100' >
                            <span className='text-2xl font-bold  flex justify-center text-white tracking-wider'>
                                NETFLIX CLONE

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://melodic-taiyaki-4e80ee.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Cloud})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  flex justify-center text-white tracking-wider' >
                                CLOUD MANAGEMENT CLONE

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://wondrous-sherbet-941e24.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Projectai})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.95s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100' >
                            <span className='text-2xl font-bold  flex justify-center text-white tracking-wider'>
                                Project Alan ai news app

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://rococo-biscochitos-e51773.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Ui1})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                TV SHOW APP UI

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Ui2})`, transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s"
                    }} className='shadow-lg shadow-[#040c16] justify-center items-center mx-auto group container rounded-md content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                SINGLE PRODUCT UI

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Works
