import axios from "axios"
import { useRecoilState } from "recoil";
import { courseAtom } from "../store/atoms/courses";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [courses, setCourses] = useRecoilState(courseAtom);
  const courseListRef = useRef();
  const searchBarRef = useRef();
  let timeoutId;
  function debounce (e) {
    if(!e.target.value) {
      searchBarRef.current.classList.add('rounded-3xl');
      searchBarRef.current.classList.remove('rounded-t-2xl');
      courseListRef.current.classList.add('hidden');
    } else {
      searchBarRef.current.classList.remove('rounded-3xl');
      searchBarRef.current.classList.add('rounded-t-2xl');
      courseListRef.current.classList.add('rounded-b-2xl');
      courseListRef.current.classList.remove('hidden');
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchSuggestions, 100, e);
  }
  async function searchSuggestions(e) {
    const res = await axios.post(`http://localhost:8000/search/suggestions?q=${e.target.value}`)
    if(!e.target.value) {
      setCourses([]);
    } else {
      setCourses(res.data.output);
    }
  }

  return (
    <div className="w-full">
      <input ref={searchBarRef} onInput={debounce} type="text" placeholder='Search' className="w-full h-[40px] rounded-3xl border-2 border-gray-400 px-4 font-medium outline-none text-black"/>
      <div ref={courseListRef} className="bg-white list-none px-4 absolute top-[64px] left-[489px] w-[340px] border-2 border-t-0 border-gray-400 py-2 hidden">
        {courses.map((course) => {
          return <li key={course._id} className="text-lg font-normal"><Link to={`/course/${course._id}`} >{course.title}</Link></li>
        })}
      </div>
    </div>
  )
}

export default SearchBar
