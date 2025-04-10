import axios from "axios"
import { useNavigate } from "react-router-dom"

const Teaching = () => {

  const navigate = useNavigate();

  function showInstructorDashboard() {
    axios.put("https://course-selling-website-q42x.onrender.com/admin/teaching", {
      _id: window.localStorage.getItem("userId"),
      isAdmin: true
    })
    navigate("/admin/dashboard");
  }
  return (
    <div className="h-screen flex flex-wrap md:h-[750px] md:px-10 md:justify-center lg:h-screen lg:items-center lg:px-14 lg:flex-nowrap xl:h-[620px]">
        <div className="w-full lg:w-[100vw] lg:h-[70vh] xl:w-[120vw] xl:h-full">
          <img className="h-full w-full object-cover xl:mt-0" src="/images/teaching.png" alt="" />
        </div>
        <div className="border border-[#333] h-48 w-full rounded-lg flex justify-center items-center flex-col gap-3 md:w-[80%] lg:w-[90%]">
            <h2 className="text-2xl font-extrabold md:text-3xl">Start Teaching</h2>
            <p className="text-sm md:text-base">Start your teaching journey from here.</p>
            <button onClick={showInstructorDashboard} className="px-3 cursor-pointer py-1 text-base rounded-3xl hover:shadow-md bg-yellow-500 md:text-lg md:px-4 md:py-2">Get Started</button>
        </div>
    </div>
  )
}

export default Teaching
