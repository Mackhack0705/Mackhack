import gsap from "gsap"
import { useRef } from"react"
import { reviews } from "@/constants/index.js"

const ReviewCard = ({ children }: { children: any}) => {
  const divRef = useRef<HTMLDivElement>(null);

  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: MouseMoveEvent) => {
    const rect = divRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current?.style.setProperty("--mouse-x", `${x}px`);
    divRef.current?.style.setProperty("--mouse-y", `${y}px`);
    divRef.current?.style.setProperty("--spotlight-color", "rgba(255, 255, 255, 0.25)");
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className='card-spotlight sm:w-1/3 md:w-12/25 lg:w-1/4 xl:w-1/5'
    >
      <div className='flex flex-col justify-center items-center w-full h-full p-4 rounded-lg shadow-lg'>
        <img src={children.userImg} alt="User" className='w-16 h-16 rounded-full mb-4' />
        <h3 className='text-xl font-semibold'>{children.userName}</h3>
        <p className='text-neutral-700 text-center'>{children.reviewText}</p>
      </div>
    </div>
  )
}

const ReviewSection = () => {

  return (
    <div className="flex justify-between my-20 px-2 gap-2 flex-wrap md:px-8 md:gap-2 lg:px-4 lg:gap-1 xl:px-10">
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          {review}
        </ReviewCard>
      ))}
    </div>
  )
}

export default ReviewSection