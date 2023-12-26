import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  function submit(e) {
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formData = new FormData(formEle);
  
    fetch('https://script.google.com/macros/s/AKfycbwBMlw4o9zJpO0oXblP0DlM4aL_sMoBJT-1zkXMna0HPcMZUZy65eXumHfwuHWIbod85Q/exec', {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success') {
          toast.success('Form submitted successfully!', { position: toast.POSITION.TOP_CENTER });
        } else {
          toast.error('Form submission failed. Please try again later.', { position: toast.POSITION.TOP_CENTER });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.success('I have received your message!', { position: toast.POSITION.TOP_CENTER });      });
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}  style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }} name='contact' className='w-full h-screen  flex justify-center items-center  p-4'>
      <form onSubmit={(e) => submit(e)} className='form flex flex-col max-w-[600px]  w-full'>
        <div className='pb-8'>
          <p className='text-4xl  font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below for any queries</p>
        </div>
        <input  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.65s"
        }} type="text" name="Name" placeholder='Name' className='bg-[#ccd6f6] p-2' />
        <input  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
        }} type="email" name="Email" placeholder='Email' className='bg-[#ccd6f6] my-4 p-2' />
        <input  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s"
        }} type='text' name="Message" className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10"></input>
        <button  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }} className='text-white border-2 hover:text-black hover:bg-white hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Contact
