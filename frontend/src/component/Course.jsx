import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/course/${courseId}`)
    .then((res) => {
      setCourse(res.data.output);
    })
  }, [courseId])

  return (
    <div className='w-full h-full px-10 py-40 flex justify-around'>
        <div className='px-4 py-2 h-[200px] w-[550px]'>
            <h2 className='text-5xl font-bold'>{course.title}</h2>
            <p className="text-lg">{course.description}</p>
            <p className="font-bold text-3xl mt-10">Rs. {course.price} /-</p>
        </div>
        <img src={course.imageLink} alt="" className='relative bottom-14 right-10 w-[550px] h-[400px] rounded-lg'/>
    </div>
  )
}

export default Course
