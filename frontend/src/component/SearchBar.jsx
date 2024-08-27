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
      const res = await axios.post(`http://localhost:8000/search/courses?q=${e.target.value}`)
      searchBarRef.current.value = '';
      navigate('/courses', {state: res.data.response});
    }
  }
  async function searchSuggestions(e) {
    const res = await axios.post(`http://localhost:8000/search/suggestions?q=${e.target.value}`)
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
      <input ref={searchBarRef} onInput={debounce} onKeyDown={enterKey} type="Search" placeholder='Search' className="w-full h-[40px] rounded-3xl placeholder-shown:focus:rounded-3xl border-2 border-gray-400 px-4 font-medium outline-none text-black peer focus-within:rounded-t-2xl focus-within:rounded-b-none hover:shadow-md"/>
      <div ref={courseListRef} className="bg-white list-none px-4 absolute top-[40px] w-[340px] border-2 border-t-0 border-gray-400 py-2 rounded-b-2xl block peer-placeholder-shown:hidden">
        {courses.map((course) => {
          return <li key={course._id} className="text-lg font-normal"><Link onClick={emptyInput} to={`/course/${course._id}`} >{course.title}</Link></li>
        })}
      </div>
    </div>
  )
}

export default SearchBar
