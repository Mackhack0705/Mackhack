import { useEffect, useRef } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    function SubmitSignUp() {
        
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
          axios.post('http://localhost:8000/user/signup', {
            firstName,
            lastName,
            username,
            password
          })
          .then((res) => {
            alert(res.data.msg);
            navigate("/");
          })
    }

  return (
    <div className="flex justify-center h-[665px] py-10">
      <div className="border-white border-2 px-10 py-8 rounded text-center text-2xl font-bold">
        <h2 className="my-16">Sign Up</h2>
        <div>
            <input ref={firstNameRef} className="rounded-3xl px-4 py-1 font-normal" type="text" placeholder="First Name"/> <br /><br />
            <input ref={lastNameRef} className="rounded-3xl px-4 py-1 font-normal" type="text" placeholder="Last Name"/> <br /><br />
            <input ref={usernameRef} className="rounded-3xl px-4 py-1 font-normal" type="text" placeholder="Username"/> <br /><br />
            <input ref={passwordRef} className="rounded-3xl px-4 py-1 font-normal" type="text" placeholder="Password"/> <br /><br />
            <button onClick={SubmitSignUp} className="bg-white text-black rounded-3xl px-4 py-1 my-6">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
