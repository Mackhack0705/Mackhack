import { Link, useNavigate } from "react-router-dom";
// import { useSetRecoilState } from 'recoil';
// import { loggedInAtom } from '../store/atoms/loggedIn';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.js";
import SignOut from "./SignOut.js";

const Profile = ({session}: {session: any}) => {
  // const setIsLoggedIn = useSetRecoilState(loggedInAtom);
  const user = JSON.parse(window.localStorage.getItem("user") ?? "null");
  const navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    // setIsLoggedIn(true);
    navigate("/");
  }

  useGSAP(() => {
    gsap.from("#profile", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <div id="profile" className="cursor-pointer group">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 "
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark">
          <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={"/"} className="w-full">My Cart</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/"} className="w-full">My Learing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/teaching"} className="w-full">Teach on Mackhack</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
