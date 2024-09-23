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
      <div className='flex flex-wrap justify-around items-center h-full'>
        <div className='text-left py-10 px-5 w-[500px] md:px-1'>
          <div className='text-3xl font-bold text-[#01c8b5] md:text-5xl lg:text-6xl'>Full stack Development</div>
          <div className='text-sm font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a blanditiis voluptas numquam possimus commodi iste dolorum nostrum architecto debitis laboriosam fugiat, officia pariatur quaerat aliquam. Aperiam qui asperiores obcaecati veniam at!</div>
        </div>
        <div className="bg-background-texture bg-cover bg-center rounded-lg w-[550px] pt-8 md:w-[500px] lg:w-[400px]">
          <img id='ipad' className="absolute w-[80px] h-[80px] right-60 top-88 md:w-[120px] md:h-[120px] md:right-[500px] lg:w-[100px] lg:h-[100px] lg:right-80" src="/images/ipad.png" alt="" />
          <img src="/images/img1.png" alt="" />
          <img id='book' className="absolute top-[550px] right-6 w-[100px] h-[50px] md:w-[140px] md:h-[70px] md:right-40 lg:w-[120px] lg:h-[60px] lg:right-8 lg:top-[450px]" src="/images/book.png" alt="" />
        </div>
      </div>
   </div>
  )
}

export default BannerSection
