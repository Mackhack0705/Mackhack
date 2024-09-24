import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const MainNavBar = () => {
    const menuRef = useRef();
    const searchBarRef = useRef();
    const searchIconRef = useRef();

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

    function showSearchBar() {
        searchBarRef.current.classList.remove('hidden');
        searchIconRef.current.classList.add('hidden');
      }
      function hideSearchBar() {
        searchBarRef.current.classList.add('hidden');
        searchIconRef.current.classList.remove('hidden');
      }
  
      const handleClickOutside = (event) => {
        if(searchBarRef.current && !searchBarRef.current.contains(event.target)) {
          hideSearchBar();
        }
      }
  
      useEffect(() => {
        // Add event listener when search bar is visible
        document.addEventListener('mousedown', handleClickOutside);
  
        // Cleanup the event listener on unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
  
      function openMenu() {
        menuRef.current.classList.remove('invisible');
      }
  
      function closeMenu() {
        menuRef.current.classList.add('invisible');
      }
    return (
        <div className="flex items-center justify-between text-lg font-bold py-6 px-4 bg-[#ebfffe] xl:px-20">
            <div id="logo" className="text-2xl md:text-3xl">
                M<span className="text-[#01c8b5]">a</span>ke
                <span className="text-[#01c8b5]">hack</span>
            </div>
            <div ref={searchBarRef} id="searchBar" className="w-1/4 hidden mr-4 md:block">
                <SearchBar />
            </div>
            <div ref={searchIconRef} onClick={showSearchBar} className="ml-28 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div onClick={openMenu} className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 md:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div ref={menuRef} id="menu" className="flex gap-2 flex-wrap flex-col invisible absolute top-14 right-2 bg-white border-gray-300 rounded-md w-28 p-4 md:w-40 lg:visible lg:bg-transparent lg:border-0 lg:w-80 lg:relative lg:flex-row lg:top-0 lg:justify-between">
                <div onClick={closeMenu} className="cursor-pointer lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 absolute right-2 top-1 md:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={"/"}>Contact us</Link>
                <Link className="link" to={"/"}>About</Link>
                <Profile />
            </div>
        </div>
    );
};

export default MainNavBar;
