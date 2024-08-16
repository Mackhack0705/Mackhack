import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";


const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-xl font-bold py-6 px-20 bg-[#ebfffe]">
      <div className="text-3xl">
        M<span className="text-[#01c8b5]">a</span>ke
        <span className="text-[#01c8b5]">hack</span>
      </div>
      <div className="w-1/4">
        <SearchBar />
      </div>
      <div className="flex gap-9">
        {/* Login and signup or Profile */}

        <button className="text-xl text-[#0a2e31] hover:shadow-lg" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="border-[1.5px] border-[#0a2e31] px-3 py-1 rounded-3xl text-lg bg-[#01c8b5] text-[#0a2e31] hover:shadow-xl" onClick={() => navigate("/signup")}>
          SignUp
        </button>
      </div>
    </div>
  );
};

export default NavBar;
