import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(loggedInAtom);

  function SubmitLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    axios.post('http://localhost:8000/user/signin', {
      username,
      password
    })
    .then((res) => {
      window.localStorage.setItem('token', res.data.token);
      setLoggedIn(true);
      navigate("/");
    })
  }
  return (
    <div className="flex justify-center h-[665px] py-10">
      <div className="border-white border-2 px-10 py-8 rounded text-center text-2xl font-bold">
        <h2 className="my-16">Log In</h2>
        <div>
            <input ref={usernameRef} className="rounded-3xl px-4 py-1" type="text" placeholder="username"/> <br /><br />
            <input ref={passwordRef} className="rounded-3xl px-4 py-1" type="text" placeholder="password"/> <br /><br />
            <button onClick={SubmitLogin} className="bg-white text-black rounded-3xl px-4 py-1 my-6">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Login
