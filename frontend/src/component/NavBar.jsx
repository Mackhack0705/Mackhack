import { useNavigate } from "react-router-dom"
import { useRecoilState} from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";
import { useRef } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom);
  const logoutRef = useRef();
  const logout_btn = logoutRef.current;
  function showLogout() {
    {loggedIn ? 
      setLoggedIn(false)
      : setLoggedIn(true)
    }
    if(loggedIn) {
      logout_btn.classList.remove('invisible');
    } else {
      logout_btn.classList.add('invisible');
    }
  }

  function logout() {
    window.localStorage.removeItem('token');
  }

  return (
    <div className='flex align-middle justify-between h-14 py-3 px-6 text-2xl font-bold'>
      <div className="">
        Makehack
      </div>
      <div className='w-2/5'>
        <input type="text" className='rounded-2xl text-black w-full outline-none px-4' placeholder='Search course'/>
      </div>
      <div className="flex align-middle gap-9">
        <button onClick={() => {
          navigate("/");
        }}>Home</button>
        <button onMouseOver={() => {
          console.log('hi');
        }}>Category</button>
        {window.localStorage.getItem('token') ? 
          <div onClick={showLogout} className="flex justify-center items-center h-20 flex-col cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            <div ref={logoutRef} className="bg-white text-black p-2 rounded invisible">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          :
          <>
            <button onClick={() => {
              navigate("/login");
            }}>Login</button>
            <button onClick={() => {
              navigate("/signup");
            }}>SignUp</button>
          </>
        }
      </div>
    </div>
  )
}

export default NavBar
