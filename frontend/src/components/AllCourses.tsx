import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllCourses = () => {
    const location = useLocation();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(location.state);
    }, []);
    console.log(location.state)

  return (
    <div className="flex flex-wrap h-[635px] justify-around p-8">
      {
        courses.map((course) => {
            return (<div key={course._id} className="w-[300px] h-[300px] rounded-xl">
              <img src={course.imageLink} alt="" className="h-[70%] rounded-t-xl"/>
              <div className="px-3 py-2 text-lg">
                <div className="font-semibold">{course.title}</div>
                <div className="">Rs. {course.price}</div>
              </div>
            </div>)
        })
      }
    </div>
  )
}

export default AllCourses
