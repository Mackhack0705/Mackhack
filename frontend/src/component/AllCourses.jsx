import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const AllCourses = () => {
    const location = useLocation();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(location.state);
    }, []);

  return (
    <div className="flex border-2 border-black h-[635px] justify-around p-8">
      {
        courses.map((course) => {
            return (<div key={course._id} className="w-[300px] h-[300px] border-2 border-black">
              <img src={course.imageLink} alt="" className="h-[70%]"/>
              <div>{course.title}</div>
              <div>{course.price}</div>
            </div>)
        })
      }
    </div>
  )
}

export default AllCourses
