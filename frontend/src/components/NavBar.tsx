import MainNavBar from "./MainNavBar.js";
import LoginNavBar from "./LoginNavBar.js";
// import { useRecoilValue } from "recoil";
// import { loggedInAtom } from "../store/atoms/loggedIn";

const NavBar = () => {
  // const isLoggedIn = useRecoilValue(loggedInAtom);

  return (
    <nav>
      {/* {isLoggedIn ? <LoginNavBar/> : <MainNavBar />} */}
      <LoginNavBar/>
    </nav>
  );
};

export default NavBar;
