import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useRecoilState } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";
import { useRef } from "react";

const MainNavBar = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom);
    const logoutRef = useRef();
    const logout_btn = logoutRef;
    function showLogout() {
        {
            loggedIn ? setLoggedIn(false) : setLoggedIn(true);
        }
        if (loggedIn) {
            logout_btn.current.classList.remove("invisible");
        } else {
            logout_btn.current.classList.add("invisible");
        }
    }

    function logout() {
        window.localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

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
                <button onClick={() => navigate("/")}>
                    Home
                </button>
                <button onClick={() => navigate("/")}>
                    Contact us
                </button>
                <button onClick={() => navigate("/")}>
                    About
                </button>
                <div onClick={showLogout} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd"/>
                    </svg>
                    <div ref={logoutRef} className="absolute right-[53px] top-16 bg-white text-black p-2 rounded-lg invisible">
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavBar;
