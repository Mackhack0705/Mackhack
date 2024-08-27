import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[640px] py-24">
      <div className=" h-32 flex justify-around items-center">
        <h1 className="text-5xl font-bold">A<span className="text-[#01c8b5]">d</span>min D<span className="text-[#01c8b5]">a</span>sh<span className="text-[#01c8b5]">board</span></h1>
        <button onClick={() => {
          navigate("/admin/addCourse");
        }} className="bg-[#01c8b5] text-lg font-semibold p-4 rounded-xl">Create Course</button>
      </div>
      <div className="bg-blue-500 h-32">

      </div>
    </div>
  )
}

export default AdminDashboard
