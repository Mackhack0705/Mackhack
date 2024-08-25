import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

const MainNavBar = () => {
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
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>Contact us</Link>
                <Link to={"/"}>About</Link>
                <Profile />
            </div>
        </div>
    );
};

export default MainNavBar;
