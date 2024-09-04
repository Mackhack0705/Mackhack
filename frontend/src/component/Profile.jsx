import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loggedInAtom } from '../store/atoms/loggedIn';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Profile = () => {
    const setIsLoggedIn = useSetRecoilState(loggedInAtom);
    const user = JSON.parse(window.localStorage.getItem("user"));
    const navigate = useNavigate();
    function logout() {
        window.localStorage.removeItem("token");
        setIsLoggedIn(true);
        navigate("/");
    };

    useGSAP(() => {
        gsap.from("#profile", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 1.5
        })
    })
  return (
    <div id='profile'  className="cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 ">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd"/>
        </svg>
        <div className="absolute right-[53px] top-15 text-base bg-white text-black font-normal p-2 rounded-lg invisible hover:visible group-hover:visible">
            <div className='p-2'>
                <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
                <p className="text-sm text-gray-500">{user.username}</p>
            </div>
            <hr />
            <div className='m-2'>
                <Link  to={"/"}>My Cart</Link>
            </div>
            <hr />
            <div className='m-2'>
                <Link to={"/"}>My Learing</Link>
            </div>
            <hr />
            <div className='m-2'>   
                <Link to={"/teaching"}>Teach on Makehack</Link>
            </div>
            <hr />
            <button className='m-2 font-semibold' onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Profile
