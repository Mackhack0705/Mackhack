import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    axios.get(`https://course-selling-website-q42x.onrender.com/course/${courseId}`)
    .then((res) => {
      setCourse(res.data.output);
    })
  }, [courseId])

  return (
    <div className='w-full h-full px-10 py-10 flex flex-wrap justify-around'>
        <div className='py-2 h-80 w-[550px] order-1'>
            <h2 className='text-3xl font-bold'>{course.title}</h2>
            <p className="text-base">{course.description}</p>
            <p className="font-bold text-3xl mt-10">Rs. {course.price} /-</p>
        </div>
        <div className="rounded-lg h-52">
          <img src={course.imageLink} alt="" className='rounded-lg h-full'/>
        </div>
    </div>
  )
}

export default Course
