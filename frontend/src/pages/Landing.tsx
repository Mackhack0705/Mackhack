import AboutSection from '@/components/AboutSection.js'
import BannerSection from '@/components/BannerSection.js'
import Brand from '@/components/Brand.js'
import CategorySection from '@/components/CategorySection.js'
import LogoScroll from '@/components/LogoScroll.js'
import ReviewSection from '@/components/ReviewSection.js'
import VideoSection from '@/components/VideoSection.js'

const Landing = () => {

  const reviews = [{
    id: 1,
    reviewImage: "/images/review1.jpg",
    userName: "Emily Carter",
    reviewText: "This platform is fantastic! The course creation process is smooth, and the interface is user-friendly. Uploading videos and organizing lessons was a breeze."
  }, {
    id: 2,
    reviewImage: "/images/review2.jpg",
    userName: "Amit Desai",
    reviewText: "I love how easy it is to create and manage courses here. The video upload feature works flawlessly, and the pricing options are flexible."
  }, {
    id: 3,
    reviewImage: "/images/review3.jpg",
    userName: "Liam Johnson",
    reviewText: "Great experience using this site to create and sell my courses. The lessons are well-structured, and the video integration is top-notch!"
  }, {
    id: 4,
    reviewImage: "/images/review4.jpg",
    userName: "Rohan Roy",
    reviewText: "An excellent platform for both course creators and students. The website's design is intuitive, and uploading content is fast and hassle-free."
  }];


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
      <div className='xl:mt-60 xl:mb-20'>
        <div className='text-center font-bold text-3xl lg:text-5xl'>Reviews</div>
        <div className='flex flex-wrap justify-around py-8 px-2'>
          {
            reviews.map((review) => (
              <ReviewSection key={review.id} review={review}/>
            ))
          }
        </div>
      </div>
      <AboutSection />
    </div>
  )
}

export default Landing
