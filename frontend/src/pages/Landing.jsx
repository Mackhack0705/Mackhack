import BannerSection from '../component/BannerSection'
import Brand from '../component/Brand'
import CategorySection from '../component/CategorySection'
import ReviewSection from '../component/ReviewSection'
import VideoSection from '../component/VideoSection'

const Landing = () => {

  return (
    <div className='h-full w-full'>
      <BannerSection /> 
      <CategorySection />
      <div >
        <div className='text-5xl text-center font-bold'>
          <h2>Brands</h2>
        </div> <br />
        <div className='flex justify-around py-8 px-20'>
          <Brand link={"/images/facebook.png"}/>
          <Brand link={"/images/microsoft.png"}/>
          <Brand link={"/images/apple.png"}/>
          <Brand link={"/images/netflix.png"}/>
          <Brand link={"/images/google.png"}/>
        </div>
      </div>
      <VideoSection />
      <div className='flex justify-around py-8 px-20'>
        <ReviewSection />
        <ReviewSection />
        <ReviewSection />
        <ReviewSection />
      </div>
    </div>
  )
}

export default Landing
