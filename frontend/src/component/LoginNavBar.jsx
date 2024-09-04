import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoginNavBar = () => {
    const navigate = useNavigate();

    useGSAP(() => {
      gsap.from("#logo", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
      gsap.from("#searchBar", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
      gsap.from("#menu .btn", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
    })
  return (
    <div className="flex items-center justify-between text-xl font-bold py-6 px-20 bg-[#ebfffe]">
      <div id="logo" className="text-3xl">
        M<span className="text-[#01c8b5]">a</span>ke
        <span className="text-[#01c8b5]">hack</span>
      </div>
      <div id="searchBar" className="w-1/4">
        <SearchBar />
      </div>
      <div id="menu" className="flex gap-9">
        {/* Login and signup or Profile */}

        <button className="btn text-xl text-[#0a2e31] hover:shadow-lg" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn border-[1.5px] border-[#0a2e31] px-3 py-1 rounded-3xl text-lg bg-[#01c8b5] text-[#0a2e31] hover:shadow-xl" onClick={() => navigate("/signup")}>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default LoginNavBar
