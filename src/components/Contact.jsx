import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center  p-4'>
      <form method='POST' action="https://getform.io/f/9f371bf7-71bd-467f-85d1-4e574ec6b3ef" className='flex flex-col max-w-[600px]  w-full'>
        <div className='pb-8'>
            <p className='text-4xl  font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below for any queries</p>
        </div>
        <input type="text" name="name" placeholder='Name' className='bg-[#ccd6f6] p-2' />
        <input type="email" name="email" placeholder='Email' className='bg-[#ccd6f6] my-4 p-2' />
        <textarea name="message" className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10"></textarea>
        <button className='text-white border-2 hover:text-black hover:bg-white hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact
