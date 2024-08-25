import axios from "axios"
import { useNavigate } from "react-router-dom"

const Teaching = () => {

  const navigate = useNavigate();

  function showInstructorDashboard() {
    axios.put("http://localhost:8000/admin/teaching", {
      _id: window.localStorage.getItem("userId"),
      isAdmin: true
    })
    navigate("/admin/dashboard");
  }
  return (
    <div className="flex justify-around items-center h-[640px] pr-40">
        <img className="h-[640px]" src="/images/teaching.png" alt="" />
        <div className="bg-[#fcf8f3] h-80 w-[500px] rounded-lg flex justify-center items-center flex-col gap-10">
            <h2 className="text-3xl font-extrabold">Get Started</h2>
            <button onClick={showInstructorDashboard} className="bg-[#96C9F4] px-4 py-2 text-lg rounded-md">Get Started</button>
        </div>
    </div>
  )
}

export default Teaching
