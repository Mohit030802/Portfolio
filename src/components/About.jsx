import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
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
