const Contact = () => {
    function sendMail() {
        
    }
  return (
    <div className='flex flex-wrap justify-center items-center h-[85vh] md:gap-4 md:flex-nowrap md:h-[90vh] xl:gap-20'>
        <div className='h-full md:w-[50%] lg:w-[40%] lg:h-[80%] xl:w-[30%] xl:h-[70%]'>
            <img src="/images/contactPage.png" alt="" className="h-full"/>
        </div>
        <div className='flex flex-col gap-3 border-2 border-gray-300 px-10 py-8 bg-[#9ce2cf] md:px-16 lg:py-6 lg:h-[99%] xl:w-[35%]'>
            <p className='text-3xl font-bold m-auto md:text-xl lg:text-2xl xl:text-3xl'>Contact Us</p>
            <label htmlFor="firstName" className="md:text-sm lg:text-lg xl:text-xl">First Name</label>
            <input id='firstName' type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='First Name' required/>
            <label htmlFor="lastName" className="md:text-sm lg:text-lg xl:text-xl">Last Name</label>
            <input id='lastName' type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='Last Name' required/>
            <label htmlFor="email" className="md:text-sm lg:text-lg xl:text-xl">Email</label>
            <input id='email' type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-none md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='Email' required/>
            <label htmlFor="note" className="md:text-sm lg:text-lg xl:text-xl">Leave a note for us</label>
            <textarea id='note' type="text" className='w-60 h-32 rounded-lg p-4 border-2 border-gray-300 outline-none md:h-28 md:w-56 lg:h-32 lg:w-64 xl:w-96' placeholder='Note' required/>
            <button className='py-1 border-2 border-black w-40 my-2 mx-auto text-xl md:text-lg md:w-36'>Submit</button>
        </div>
    </div>
  )
}

export default Contact