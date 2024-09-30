import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";
import { auth, googleProvider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const setIsLoggedIn = useSetRecoilState(loggedInAtom);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = result.user.accessToken;
      const provider = result.providerId.split(".")[0];
      console.log(result.user);
      const userName = result.user.displayName.split(" ");
      const data = {
        firstName: userName[0],
        lastName: userName[1],
        username: result.user.email,
        password: provider,
        provider: provider,
      }
      axios.post("https://course-selling-website-q42x.onrender.com/user/signup", data)
      .then((res) => {
        window.localStorage.setItem("userId", res.data.userId);
      });
      window.localStorage.setItem('token', token);
      window.localStorage.setItem("user", JSON.stringify(data));
      setIsLoggedIn(false);
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }



   function SubmitLogin(data) {
    try {
      axios.post('https://course-selling-website-q42x.onrender.com/user/signin', data)
      .then(async (res) => {
        if(res.data.token) {
          window.localStorage.setItem('token', res.data.token);
          try {
            const userId = window.localStorage.getItem('userId') ? window.localStorage.getItem('userId') : res.data.userId;
            const output = await axios.get(`https://course-selling-website-q42x.onrender.com/user?userId=${userId}`,{
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
              })
            window.localStorage.setItem("user", JSON.stringify(output.data.user));
            setIsLoggedIn(false);
            } catch(err) {
              console.log(err);
            }
          navigate("/");
        } else {
          alert(res.data.msg);
        }
      })
    } catch(err) {
      console.log(err);
      alert(err.message);
    }
  }
  return (
    <div className="flex justify-center h-[522px] py-10 bg-cover bg-center bg-login-texture md:h-[542px] lg:py-4">
      <div className="border-gray-400 border-2 px-[20px] rounded text-center text-2xl font-bold md:px-14 md:py-8 lg:py-10 xl:py-12">
        <h2 className="my-16 md:my-10 xl:text-3xl">Log In</h2>
        <div className="flex flex-col items-center gap-8">
            <input {...register("username", {required: "* Field is empty"})} className="rounded-3xl px-4 py-1 text-xl w-56 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64 lg:w-72" type="email" placeholder="username"/>
            <div className="absolute top-[358px] px-2 text-xs text-left text-red-500">{errors.username?.message}</div>
            <input {...register("password", {required: "* Field is empty"})} className="rounded-3xl px-4 py-1 text-xl w-56 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64 lg:w-72" type="password" placeholder="password"/>
            <button onClick={handleGoogleLogin} className="bg-white w-48 border-[1px] border-gray-500 font-semibold text-base rounded-3xl py-1 px-3 flex gap-2"> <img src="/images/google-symbol.png" alt="" className="w-5 h-5 mt-[2px]"/>SignIn with Google</button>
            <button onClick={handleSubmit(SubmitLogin)} className="bg-[#01c8b5] text-[#0a2e31] w-[90px] rounded-3xl px-4 py-1 my-2 mx-auto text-lg hover:scale-110 border-[#0a2e31] border-2">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Login
