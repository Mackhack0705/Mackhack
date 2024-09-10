import gsap from "gsap"

const ReviewSection = ({ review }) => {
  console.log(`#review${review.id}`)
  let scaleUp = function () {
    gsap.to(`#review${review.id}`, {
      scale: 1.1,
      duration: 1,
    })
  } 
  let scaleDown = function () {
    gsap.to(`#review${review.id}`, {
      scale: 1,
      duration: 1,
    })
  }

  return (
    <div id={`review${review.id}`} onMouseEnter={scaleUp} onMouseLeave={scaleDown} className='border-[1px] border-gray-400 bg-white h-80 w-80 px-6 py-4 rounded-xl m-4'>
        <div className='flex flex-col items-center my-5'>
            <img src={review.reviewImage} alt="" className='h-20 w-20 rounded-full object-contain'/> <span className='text-xl font-semibold'>{review.userName}</span>
        </div>
        <div className="px-2 text-justify mb-8">
          <h3>{review.reviewText}</h3>
        </div>
    </div>
  )
}

export default ReviewSection