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
    <div className='border-2 border-black w-full h-full px-10 py-40 flex justify-around'>
        <div className='px-4 py-2 border-2 border-black h-[200px] w-[500px]'>
            <h2 className='text-3xl font-bold'>{course.title}</h2>
            <p className="">{course.description}</p>
            <p className="font-bold text-2xl">Rs. {course.price}</p>
        </div>
        <img src={course.imageLink} alt="" className='w-[400px] h-[200px] rounded-t-lg border-2 border-black'/>
    </div>
  )
}

export default Course
