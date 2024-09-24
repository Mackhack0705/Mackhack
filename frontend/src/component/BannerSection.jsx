import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BannerSection = () => {

  useGSAP(() => {
    gsap.to("#ipad", {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo:true
    })
    gsap.to("#book", {
      y:-30,
      duration: 3,
      repeat: -1,
      yoyo: true
    })
  })
  
  return (
   <div className="w-full h-[650px]">
      <div className='flex flex-wrap justify-around items-center h-full xl:px-10'>
        <div className='text-left py-10 px-5 w-[500px] md:px-1'>
          <div className='text-5xl font-bold text-[#01c8b5] md:text-6xl lg:text-7xl'>Full stack Development</div>
          <div className='text-base font-semibold md:text-lg lg:text-xl'>Discover cutting-edge courses designed to elevate your skills in Full Stack Development, Web3, and Machine Learning. Learn at your pace with expert instructors and hands-on projects tailored to real-world scenarios.</div>
        </div>
        <div className="bg-background-texture bg-cover bg-center rounded-lg w-[550px] pt-8 md:w-[500px] xl:w-[600px]">
          <img id='ipad' className="absolute w-[80px] h-[80px] right-60 top-88 md:w-[120px] md:h-[120px] md:right-[500px] lg:w-[100px] lg:h-[100px] lg:right-80 xl:w-[150px] xl:h-[150px] xl:right-[560px]" src="/images/ipad.png" alt="" />
          <img src="/images/img1.png" alt="" />
          <img id='book' className="absolute top-[550px] right-6 w-[100px] h-[50px] md:w-[140px] md:h-[70px] md:right-40 lg:w-[120px] lg:h-[60px] lg:right-8 lg:top-[450px] xl:w-[160px] xl:h-[80px] xl:right-40" src="/images/book.png" alt="" />
        </div>
      </div>
   </div>
  )
}

export default BannerSection
