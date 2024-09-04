import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainNavBar = () => {

    useGSAP(() => {
        gsap.from("#logo", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5
        })
        gsap.from("#searchBar", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5
        })
        gsap.from("#menu .link", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            stagger: 0.4
        })
    })
    return (
        <div className="flex items-center justify-between text-xl font-bold py-6 px-20 bg-[#ebfffe]">
            <div id="logo" className="text-3xl">
                M<span className="text-[#01c8b5]">a</span>ke
                <span className="text-[#01c8b5]">hack</span>
            </div>
            <div id="searchBar" className="w-1/4">
                <SearchBar />
            </div>
            <div id="menu" className="flex gap-9">
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={"/"}>Contact us</Link>
                <Link className="link" to={"/"}>About</Link>
                <Profile />
            </div>
        </div>
    );
};

export default MainNavBar;
