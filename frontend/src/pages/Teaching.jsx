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
    <div className="flex justify-around items-center h-[640px] pr-40">
        <img className="h-[640px]" src="/images/teaching.png" alt="" />
        <div className="bg-[#01c8b5] text-white h-80 w-[500px] rounded-lg flex justify-center items-center flex-col gap-10">
            <h2 className="text-3xl font-extrabold">Start Teaching</h2>
            <p>Start your teaching journey from here.</p>
            <button onClick={showInstructorDashboard} className="px-4 py-2 text-lg rounded-3xl hover:shadow-md bg-yellow-500">Get Started</button>
        </div>
    </div>
  )
}

export default Teaching
