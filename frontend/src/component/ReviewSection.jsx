import gsap from "gsap"

const ReviewSection = ({ review }) => {
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
    <div id={`review${review.id}`} onMouseEnter={scaleUp} onMouseLeave={scaleDown} className='border-[1px] border-gray-400 bg-white h-40 w-80 px-2 py-5 rounded-xl m-4 flex justify-between flex-wrap md:px-6 lg:w-52 lg:h-64 lg:justify-center lg:py-2'>
        <div className='flex flex-col items-center my-5'>
            <img src={review.reviewImage} alt="" className='h-14 w-14 rounded-full object-contain'/> <span className='text-sm font-semibold mt-2 md:mt-0'>{review.userName}</span>
        </div>
        <div className="px-2 text-justify text-xs w-40 mb-8 md:py-2">
          <h3>{review.reviewText}</h3>
        </div>
    </div>
  )
}

export default ReviewSection