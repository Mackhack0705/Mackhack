import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const showUsernameDiv = useRef();
  const showPasswordDiv = useRef();

  const navigate = useNavigate();

  function SubmitLogin() {
    const username = usernameRef.current.value;
    if(!username) {
      showUsernameDiv.current.classList.remove('hidden');
      return;
    } else {
      showUsernameDiv.current.classList.add('hidden');
    }
    const password = passwordRef.current.value;
    if(!password) {
      showPasswordDiv.current.classList.remove('hidden');
      return;
    } else {
      showPasswordDiv.current.classList.add('hidden');
    }


    axios.post('http://localhost:8000/user/signin', {
      username,
      password
    })
    .then((res) => {
      window.localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
      navigate("/");
    })
  }
  return (
    <div className="flex justify-center h-[646px] py-10 bg-cover bg-center bg-login-texture ">
      <div className="border-gray-400 border-2 px-24 py-6 rounded text-center text-2xl font-bold">
        <h2 className="my-16">Log In</h2>
        <div className="flex flex-col gap-8">
            <input ref={usernameRef} className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400" type="text" placeholder="username"/>
            <div ref={showUsernameDiv} className="absolute top-[358px] px-2 text-xs text-left text-red-500 hidden"> * Field is empty</div>
            <input ref={passwordRef} className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400" type="text" placeholder="password"/>
            <div ref={showPasswordDiv} className="absolute top-[434px] px-2 text-xs text-left text-red-500 hidden"> * Field is empty</div>
            <button onClick={SubmitLogin} className="bg-[#01c8b5] text-[#0a2e31] w-[90px] rounded-3xl px-4 py-1 my-2 mx-auto text-lg hover:scale-110 border-[#0a2e31] border-2">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Login
