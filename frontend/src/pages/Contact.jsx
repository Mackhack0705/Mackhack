import React from 'react'

const Contact = () => {
    function sendMail() {
        
    }
  return (
    <div className='flex justify-center items-center h-[85vh]'>
        <div className='mr-10'>
            <img src="/images/contactPage.png" alt="" />
        </div>
        <div className='flex flex-col gap-3 border-2 border-gray-300 px-20 py-8 bg-[#9ce2cf]'>
            <p className='text-3xl font-bold m-auto'>Contact Us</p>
            <label htmlFor="firstName">First Name</label>
            <input id='firstName' type="text" className='w-80 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none' placeholder='First Name' required/>
            <label htmlFor="lastName">Last Name</label>
            <input id='lastName' type="text" className='w-80 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none' placeholder='Last Name' required/>
            <label htmlFor="email">Email</label>
            <input id='email' type="text" className='w-80 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none' placeholder='Email' required/>
            <label htmlFor="note">Leave a note for us</label>
            <textarea id='note' type="text" className='w-80 h-32 rounded-lg p-4 border-2 border-gray-300 outline-none' placeholder='Note' required/>
            <button className='px-3 py-2 border-2 border-black w-40 my-2 mx-auto text-xl'>Submit</button>
        </div>
    </div>
  )
}

export default Contact