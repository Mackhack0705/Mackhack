import { Link } from "react-router-dom";
import Profile from "./Profile.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const MainNavBar = () => {
    useGSAP(() => {
        gsap.from("#logo", {
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
        <div className="relative">
            <div className="flex items-center justify-between text-lg font-bold py-6 px-4 xl:px-20">
                <Link id="logo" className="text-2xl md:text-3xl bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent" to={"/"}>
                   Mackhack
                </Link>
                <div id="menu" className="flex gap-8 text-xl max-sm:hidden">
                    <Link className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent" to={"/"}>Home</Link>
                    <Link className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent" to={"/courses"}>Courses</Link>
                    <Link className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent" to={"/contactUs"}>Contact us</Link>
                    <Link className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent" to={"/aboutUs"}>About</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                  </div>
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="size-5 text-white"><path d="M352 160v-32C352 57.4 294.6 0 224 0 153.4 0 96 57.4 96 128v32H0v272c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V160h-96zm-192-32c0-35.3 28.7-64 64-64s64 28.7 64 64v32H160v-32zm160 120c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm-192 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/></svg>
                  </div>
                  <Profile />
                </div>
            </div>
        </div>
    );
};

export default MainNavBar;
