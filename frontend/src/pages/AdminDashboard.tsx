import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const instructorId = window.localStorage.getItem('userId');
    try {
      axios.get(`https://course-selling-website-q42x.onrender.com/admin/courses?instructorId=${instructorId}`)
      .then(async (res) => {
        const data = await res.data;
        setCourses(data.courses);
      })
      
    } catch(err) {
      console.log('Error: ', err);
    }
  }, []);
  return (
    <div className="flex flex-wrap justify-center py-20">
      <div className="flex flex-wrap w-full justify-center gap-2 text-center items-center md:justify-around">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Admin Dashboard</h1>
        <button onClick={() => {
          navigate("/admin/addCourse");
        }} className="border border-[#333] p-4 cursor-pointer text-sm font-semibold p-2 rounded-xl md:text-base lg:text-lg">Create Course</button>
      </div>
      <div className="my-4">
        {
          courses.map((course) => (
            <div key={course._id} className="flex flex-wrap gap-4 justify-center bg-white p-4 md:flex-nowrap">
              <div className="w-64">
                <img src={course.imageFile.path} alt="" className="h-full"/>
              </div>
              <div className="px-4">
                <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">{course.title}</h2>
                <p className="text-xs md:text-sm lg:text-base">{course.description}</p>
                <p className="text-lg md:text-xl lg:text-2xl">Rs. {course.price} /-</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AdminDashboard
