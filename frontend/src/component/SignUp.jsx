import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const showFirstnameDiv = useRef();
  const showLastnameDiv = useRef();
  const showUsernameDiv = useRef();
  const showPasswordDiv = useRef();

  const navigate = useNavigate();

  function SubmitSignUp() {
    const firstName = firstNameRef.current.value;
    if (!firstName) {
      showFirstnameDiv.current.classList.remove("hidden");
      return;
    } else {
      showFirstnameDiv.current.classList.add("hidden");
    }
    const lastName = lastNameRef.current.value;
    if (!lastName) {
      showLastnameDiv.current.classList.remove("hidden");
      return;
    } else {
      showLastnameDiv.current.classList.add("hidden");
    }
    const username = usernameRef.current.value;
    if (!username) {
      showUsernameDiv.current.classList.remove("hidden");
      return;
    } else {
      showUsernameDiv.current.classList.add("hidden");
    }
    const password = passwordRef.current.value;
    if (!password) {
      showPasswordDiv.current.classList.remove("hidden");
      return;
    } else {
      showPasswordDiv.current.classList.add("hidden");
    }
    axios
      .post("http://localhost:8000/user/signup", {
        firstName,
        lastName,
        username,
        password,
      })
      .then((res) => {
        alert(res.data.msg);
        navigate("/");
      });
  }

  return (
    <div className="flex justify-center h-[646px] py-10 bg-cover bg-center bg-login-texture">
      <div className="border-gray-400 border-2 px-24 py-8 rounded text-center text-2xl font-bold">
        <h2 className="my-8">Sign Up</h2>
        <div>
          <input
            required
            ref={firstNameRef}
            className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400"
            type="text"
            placeholder="First Name"
          />{" "}
          <br />
          <br />
          <div
            ref={showFirstnameDiv}
            className="absolute top-[300px] px-2 text-xs text-left text-red-500 hidden"
          >
            {" "}
            * Field is empty
          </div>
          <input
            required
            ref={lastNameRef}
            className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400"
            type="text"
            placeholder="Last Name"
          />{" "}
          <br />
          <br />
          <div
            ref={showLastnameDiv}
            className="absolute top-[375px] px-2 text-xs text-left text-red-500 hidden"
          >
            {" "}
            * Field is empty
          </div>
          <input
            required
            ref={usernameRef}
            className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400"
            type="text"
            placeholder="Username"
          />{" "}
          <br />
          <br />
          <div
            ref={showUsernameDiv}
            className="absolute top-[450px] px-2 text-xs text-left text-red-500 hidden"
          >
            {" "}
            * Field is empty
          </div>
          <input
            required
            ref={passwordRef}
            className="rounded-3xl px-4 py-1 font-normal outline-none text-gray-500 border-2 border-gray-400"
            type="text"
            placeholder="Password"
          />{" "}
          <br />
          <br />
          <div
            ref={showPasswordDiv}
            className="absolute top-[525px] px-2 text-xs text-left text-red-500 hidden"
          >
            {" "}
            * Field is empty
          </div>
          <button
            onClick={SubmitSignUp}
            className="bg-[#01c8b5] text-[#0a2e31] rounded-3xl px-4 py-1 my-6 text-lg hover:scale-110 border-[#0a2e31] border-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
