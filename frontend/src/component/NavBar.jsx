import { useNavigate } from "react-router-dom"
import { useRecoilState} from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";
import { useRef } from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom);
  const logoutRef = useRef();
  const logout_btn = logoutRef.current;
  function showLogout() {
    console.log('hi')
    {loggedIn ? 
      setLoggedIn(false)
      : setLoggedIn(true)
    }
    if(loggedIn) {
      logout_btn.classList.remove('hidden');
    } else {
      logout_btn.classList.add('hidden');
    }
  }

  function logout() {
    window.localStorage.removeItem('token');
  }

  return (
    <div className='flex items-center justify-between text-xl font-bold py-6 px-20 bg-[#ebfffe]'>
      <div className="text-3xl">
        M<span className="text-[#01c8b5]">a</span>ke<span className="text-[#01c8b5]">hack</span>
      </div>
      <div className='w-1/4'>
        <SearchBar />
      </div>
      <div className="flex gap-9">
        <button className="" onClick={() => {
          navigate("/");
        }}>Home</button>

        {/* Login and signup or Profile */}

        {window.localStorage.length ? 
          <div onClick={showLogout} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            <div ref={logoutRef} className="absolute right-2 bg-white text-black p-2 rounded hidden">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          :
          <>
            <button className="text-xl text-[#0a2e31] hover:shadow-lg" onClick={() => {
              navigate("/login");
            }}>Login</button>
            <button className="border-[1.5px] border-[#0a2e31] px-3 py-1 rounded-3xl text-lg bg-[#01c8b5] text-[#0a2e31] hover:shadow-xl" onClick={() => {
              navigate("/signup");
            }}>SignUp</button>
          </>
        }
      </div>
    </div>
  )
}

export default NavBar
