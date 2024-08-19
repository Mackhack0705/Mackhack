import axios from "axios"
import { useRecoilState } from "recoil";
import { courseAtom } from "../store/atoms/courses";

const SearchBar = () => {
  const [courses, setCourses] = useRecoilState(courseAtom);
  let timeoutId;
  function debounce (e) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchSuggestions, 500, e);
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
      <input onInput={debounce} type="text" placeholder='Search' className="w-full h-[40px] rounded-3xl border-2 border-gray-400 px-4 font-medium outline-none text-black"/>
      <div className="bg-white list-none px-4 absolute top-[80px] w-[330px]">
        {courses.map((course) => {
          return <li key={course._id} className="text-lg font-normal">{course.title}</li>
        })}
      </div>
    </div>
  )
}

export default SearchBar
