import AboutSection from '@/components/AboutSection.js'
import BannerSection from '@/components/BannerSection.js'
import Brand from '@/components/Brand.js'
import CategorySection from '@/components/CategorySection.js'
import LogoScroll from '@/components/LogoScroll.js'
import ReviewSection from '@/components/ReviewSection.js'
import VideoSection from '@/components/VideoSection.js'

const Landing = () => {

  return (
    <div className='h-screen w-full dark'>
      <BannerSection /> 
      <CategorySection />
      <div >
        <div className='text-3xl text-center font-bold md:text-5xl'>
          <h2 className="bg-gradient-to-t from-gray-500 to-white bg-clip-text text-transparent">Brands</h2>
        </div>
        <LogoScroll />
      </div>
      <VideoSection />
      <ReviewSection />
      <AboutSection />
    </div>
  )
}

export default Landing
