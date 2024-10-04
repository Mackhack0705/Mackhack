import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { auth, googleProvider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../store/atoms/loggedIn";

const SignUp = () => {
  const setIsLoggedIn = useSetRecoilState(loggedInAtom);
  const {register, handleSubmit, formState:{errors}} = useForm();

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

  function SubmitSignUp(data) {
    data.isAdmin = false;
    data.provider = "";
    axios.post("https://course-selling-website-q42x.onrender.com/user/signup", data)
      .then((res) => {
        alert(res.data.msg);
        window.localStorage.setItem("userId", res.data.userId);
        const customerData = {
          email: data.username
        }
        axios.post("https://course-selling-website-q42x.onrender.com/email/welcome", customerData, {
          headers: {
                    'Content-Type': 'application/json',
          },
        }) 
        .then((res) => {
          console.log(res);
        })
      });
    navigate("/");
  }

  return (
    <div className="flex justify-center h-[522px] bg-cover bg-center bg-login-texture md:h-[542px]">
      <div className="border-gray-400 border-2 px-[28px] py-2 rounded text-center text-2xl font-bold md:px-20 md:py-4 lg:py-10 xl:px-24 xl:py-10">
        <h2 className="mb-8 xl:text-3xl">Sign Up</h2>
        <div className="text-left flex flex-col items-center gap-8">
          <input {...register("firstName", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="text" placeholder="First Name" />
          <div className="absolute top-[280px] px-2 text-xs text-left text-red-500">
            {errors.firstName?.message}
          </div>
          <input {...register("lastName", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="text" placeholder="Last Name" />
          <div className="absolute top-[352px] px-2 text-xs text-left text-red-500">
            {errors.lastName?.message}
          </div>
          <input {...register("username", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="email" placeholder="Username" />
          <div className="absolute top-[422px] px-2 text-xs text-left text-red-500">
            {errors.username?.message}
          </div>
          <input {...register("password", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="password" placeholder="Password" />
          <div className="absolute top-[492px] px-2 text-xs text-left text-red-500">
            {errors.password?.message}
          </div>
          <button onClick={handleGoogleLogin} className="bg-white w-52 border-[1px] border-gray-500 font-semibold text-base rounded-3xl py-1 px-3 flex gap-2"> <img src="/images/google-symbol.png" alt="" className="w-5 h-5 mt-[2px]"/>SignUp with Google</button>
          <button
            onClick={handleSubmit(SubmitSignUp)}
            className="bg-[#01c8b5] text-[#0a2e31] w-28 rounded-3xl px-4 py-1 text-lg hover:scale-110 border-[#0a2e31] border-2 relative "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
