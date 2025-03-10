import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit } = useForm();
    function sendMail(data) {
        emailjs.send('service_4lelmpn', 'template_5s02t6m', data, {
          publicKey: '6JCiwt_gIllNHCkuB'
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  return (
    <div className='flex flex-wrap justify-center items-center h-[85vh] md:gap-4 md:flex-nowrap md:h-[90vh] xl:gap-20'>
        <div className='h-full md:w-[50%] lg:w-[40%] lg:h-[80%] xl:w-[30%] xl:h-[70%]'>
            <img src="/images/contactPage.png" alt="" className="h-full"/>
        </div>
        <div className='flex flex-col gap-3 border-2 border-gray-300 px-10 py-8 bg-[#9ce2cf] md:px-16 lg:py-6 lg:h-[99%] xl:w-[35%]'>
            <p className='text-3xl font-bold m-auto md:text-xl lg:text-2xl xl:text-3xl'>Contact Us</p>
            <label htmlFor="from_firstName" className="md:text-sm lg:text-lg xl:text-xl">First Name</label>
            <input {...register('from_firstName')} type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-hidden md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='First Name' required/>
            <label htmlFor="from_lastName" className="md:text-sm lg:text-lg xl:text-xl">Last Name</label>
            <input {...register('from_lastName')} type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-hidden md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='Last Name' required/>
            <label htmlFor="from_email" className="md:text-sm lg:text-lg xl:text-xl">Email</label>
            <input {...register('from_email')} type="text" className='w-60 h-10 rounded-lg p-4 border-2 border-gray-300 outline-hidden md:h-8 md:w-56 lg:h-10 lg:w-64 xl:w-96' placeholder='Email' required/>
            <label htmlFor="message" className="md:text-sm lg:text-lg xl:text-xl">Leave a note for us</label>
            <textarea {...register('message')} type="text" className='w-60 h-32 rounded-lg p-4 border-2 border-gray-300 outline-hidden md:h-28 md:w-56 lg:h-32 lg:w-64 xl:w-96' placeholder='Note' required/>
            <button onClick={handleSubmit(sendMail)} className='py-1 border-2 border-black w-40 my-2 mx-auto text-xl md:text-lg md:w-36'>Submit</button>
        </div>
    </div>
  )
}

export default Contact