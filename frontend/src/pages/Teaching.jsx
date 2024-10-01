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
    <div className="flex flex-wrap px-6 h-[540px] md:px-10 md:justify-center lg:h-[660px] lg:items-center lg:px-14 lg:flex-nowrap xl:h-[580px] xl:px-40">
        <div className="w-full lg:w-[150vw] lg:h-[70vh] xl:w-[120vw] xl:h-full">
          <img className="h-full w-full lg:mt-14 xl:mt-0" src="/images/teaching.png" alt="" />
        </div>
        <div className="bg-[#01c8b5] text-white h-48 w-full rounded-lg flex justify-center items-center flex-col gap-3 md:w-[80%] lg:w-[90%]">
            <h2 className="text-2xl font-extrabold md:text-3xl">Start Teaching</h2>
            <p className="text-sm md:text-base">Start your teaching journey from here.</p>
            <button onClick={showInstructorDashboard} className="px-3 py-1 text-base rounded-3xl hover:shadow-md bg-yellow-500 md:text-lg md:px-4 md:py-2">Get Started</button>
        </div>
    </div>
  )
}

export default Teaching
