import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loggedInAtom } from '../store/atoms/loggedIn';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Profile = () => {
    const setIsLoggedIn = useSetRecoilState(loggedInAtom);
    const user = JSON.parse(window.localStorage.getItem("user") ?? 'null');
    const navigate = useNavigate();
    function logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
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
        <div className="absolute right-0 border-[1px] border-gray-300 w-[200px] top-15 text-base bg-white text-black font-normal p-2 rounded-lg invisible hover:visible group-hover:visible">
            <div className='p-2'>
                <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
                <p className="text-sm text-gray-500">{user.username}</p>
            </div>
            <hr />
            <div className='m-2 hover:font-bold'>
                <Link  to={"/"}>My Cart</Link>
            </div>
            <hr />
            <div className='m-2 hover:font-bold'>
                <Link to={"/"}>My Learing</Link>
            </div>
            <hr />
            <div className='m-2 hover:font-bold'>   
                <Link to={"/teaching"}>Teach on Makehack</Link>
            </div>
            <hr />
            <div className='m-2 hover:font-bold peer'>   
                <div className='flex justify-between'>
                    <span>Settings</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='absolute -left-[161px] top-[195px] rounded-l-lg invisible hover:visible peer-hover:visible bg-white px-4 py-2 border-y-[1px] border-l-[1px] border-gray-300'>
                <span>Delete your account</span>
            </div>
            <hr />
            <button className='m-2 font-semibold' onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Profile
