import BannerSection from './BannerSection'
import Brand from './Brand'
import CategorySection from './CategorySection'
import Course from './Course'

const Landing = () => {
  return (
    <div className='h-full w-full'>
      <BannerSection /> 
      <CategorySection />
      <div className='flex justify-around border-2 border-black py-8 px-20'>
        <Brand link={"/images/facebook.png"}/>
        <Brand link={"/images/microsoft.png"}/>
        <Brand link={"/images/apple.png"}/>
        <Brand link={"/images/netflix.png"}/>
        <Brand link={"/images/google.png"}/>
      </div>
    </div>
  )
}

export default Landing
