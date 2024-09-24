import axios from "axios"
import { useRecoilState } from "recoil";
import { courseAtom } from "../store/atoms/courses";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [courses, setCourses] = useRecoilState(courseAtom);
  const courseListRef = useRef();
  const searchBarRef = useRef();
  const navigate = useNavigate();
  let timeoutId;
  function debounce (e) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchSuggestions, 100, e);
  }

  async function enterKey(e) {
    if(e.key == 'Enter') {
      const res = await axios.post(`https://course-selling-website-q42x.onrender.com/search/courses?q=${e.target.value}`)
      searchBarRef.current.value = '';
      navigate('/courses', {state: res.data.response});
    }
  }
  async function searchSuggestions(e) {
    const res = await axios.post(`https://course-selling-website-q42x.onrender.com/search/suggestions?q=${e.target.value}`)
    if(!e.target.value) {
      setCourses([]);
    } else {
      setCourses(res.data.output);
    }
  }

  function emptyInput() {
    searchBarRef.current.value = '';
  }

  return (
    <div className="w-full relative">
      <input ref={searchBarRef} onInput={debounce} onKeyDown={enterKey} type="Search" placeholder='Search' className="w-[120px] h-[30px] text-base rounded-3xl placeholder-shown:focus:rounded-3xl border-2 border-gray-400 px-4 font-medium outline-none text-black peer focus-within:rounded-t-2xl focus-within:rounded-b-none hover:shadow-md md:w-[220px] md:h-[38px] md:text-lg"/>
      <div className="absolute top-[5px] -right-8 md:top-[10px] md:-right-6 lg:right-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      <div ref={courseListRef} className="bg-white list-none px-4 absolute top-[30px] w-[120px] border-2 border-t-0 border-gray-400 py-2 rounded-b-2xl block peer-placeholder-shown:hidden">
        {courses.map((course) => {
          return <li key={course._id} className="text-sm font-normal"><Link onClick={emptyInput} to={`/course/${course._id}`} >{course.title}</Link></li>
        })}
      </div>
    </div>
  )
}

export default SearchBar
