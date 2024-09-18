import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";

const Login = () => {
  const setIsLoggedIn = useSetRecoilState(loggedInAtom);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const navigate = useNavigate();

   function SubmitLogin(data) {
    try {
      axios.post('https://course-selling-website-q42x.onrender.com/user/signin', data)
      .then(async (res) => {
        if(res.data.token) {
          window.localStorage.setItem('token', res.data.token);
          try {
            const userId = window.localStorage.getItem('userId');
            const res = await axios.get(`http://localhost:8000/user?userId=${userId}`,{
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
              })
            window.localStorage.setItem("user", JSON.stringify(res.data.user));
            } catch(err) {
              console.log(err);
            }
          setIsLoggedIn(false);
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
    <div className="flex justify-center h-[646px] py-10 bg-cover bg-center bg-login-texture ">
      <div className="border-gray-400 border-2 px-24 py-6 rounded text-center text-2xl font-bold">
        <h2 className="my-16">Log In</h2>
        <div className="flex flex-col gap-8">
            <input {...register("username", {required: "* Field is empty"})} className="rounded-3xl px-4 py-1 text-xl w-72 font-normal outline-none text-gray-500 border-2 border-gray-400" type="email" placeholder="username"/>
            <div className="absolute top-[358px] px-2 text-xs text-left text-red-500">{errors.username?.message}</div>
            <input {...register("password", {required: "* Field is empty"})} className="rounded-3xl px-4 py-1 text-xl w-72 font-normal outline-none text-gray-500 border-2 border-gray-400" type="password" placeholder="password"/>
            <div className="absolute top-[430px] px-2 text-xs text-left text-red-500">{errors.password?.message}</div>
            <button onClick={handleSubmit(SubmitLogin)} className="bg-[#01c8b5] text-[#0a2e31] w-[90px] rounded-3xl px-4 py-1 my-2 mx-auto text-lg hover:scale-110 border-[#0a2e31] border-2">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Login
