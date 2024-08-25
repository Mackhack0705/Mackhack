import MainNavBar from "./MainNavBar";
import LoginNavBar from "./LoginNavBar";
import { useRecoilValue } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";

const NavBar = () => {
  const isLoggedIn = useRecoilValue(loggedInAtom);
  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <LoginNavBar/> : <MainNavBar />}
    </div>
  );
};

export default NavBar;
