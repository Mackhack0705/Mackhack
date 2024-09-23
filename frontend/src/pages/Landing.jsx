import AboutSection from '../component/AboutSection'
import BannerSection from '../component/BannerSection'
import Brand from '../component/Brand'
import CategorySection from '../component/CategorySection'
import ReviewSection from '../component/ReviewSection'
import VideoSection from '../component/VideoSection'

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
    <div className='h-full w-full'>
      <BannerSection /> 
      <CategorySection />
      <div >
        <div className='text-3xl text-center font-bold md:text-5xl'>
          <h2>Brands</h2>
        </div> <br />
        <div className='flex justify-around py-5 flex-wrap'>
          <Brand link={"/images/facebook.png"}/>
          <Brand link={"/images/microsoft.png"}/>
          <Brand link={"/images/apple.png"}/>
          <Brand link={"/images/netflix.png"}/>
          <Brand link={"/images/google.png"}/>
        </div>
      </div>
      <VideoSection />
      <div>
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
