import React from 'react'
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
        // Check if the submission was successful
        if (data.result === 'success') {
          // Show success toast
          toast.success('Form submitted successfully!', { position: toast.POSITION.TOP_CENTER });
        } else {
          // Show error toast
          toast.error('Form submission failed. Please try again later.', { position: toast.POSITION.TOP_CENTER });
        }
      })
      .catch((error) => {
        console.log(error);
        // Show error toast
        toast.success('I have received your message!', { position: toast.POSITION.TOP_CENTER });      });
  }
  
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center  p-4'>
      <form onSubmit={(e) => submit(e)} className='form flex flex-col max-w-[600px]  w-full'>
        <div className='pb-8'>
          <p className='text-4xl  font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below for any queries</p>
        </div>
        <input type="text" name="Name" placeholder='Name' className='bg-[#ccd6f6] p-2' />
        <input type="email" name="Email" placeholder='Email' className='bg-[#ccd6f6] my-4 p-2' />
        <input type='text' name="Message" className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10"></input>
        <button className='text-white border-2 hover:text-black hover:bg-white hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Contact
