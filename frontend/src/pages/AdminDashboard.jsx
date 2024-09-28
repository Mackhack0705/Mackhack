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
    <div className="h-[640px] py-24">
      <div className=" h-32 flex justify-around items-center">
        <h1 className="text-5xl font-bold">A<span className="text-[#01c8b5]">d</span>min D<span className="text-[#01c8b5]">a</span>sh<span className="text-[#01c8b5]">board</span></h1>
        <button onClick={() => {
          navigate("/admin/addCourse");
        }} className="bg-[#01c8b5] text-lg font-semibold p-4 rounded-xl">Create Course</button>
      </div>
      <div className="px-60">
        {
          courses.map((course) => (
            <div key={course._id} className="flex flex-row gap-8 bg-white p-4">
              <div className="w-60">
                <img src={course.imageFile.path} alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">{course.title}</h2>
                <p>{course.description}</p>
                <p className="text-xl">Rs. {course.price} /-</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AdminDashboard
