import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import KRS from '../../public/krslogo.jpg'
import BG from '../../public/dronebackground.jpg'
import AuthContext from '../../store/auth-context';

function SigninMain() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [showError, setError] = useState("");

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();
  const login = () => {
    const { email, password } = showUser;

    if (password !== "" && email !== "" && email.indexOf('@') > -1) {
      authCtx.login("dede", 1000)
      redirect('/')
    } else {
      setError("Error")
    }

  }

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf('@') === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }
    if (name === "password") { }

    setUser({ ...showUser, [name]: value });
  }

  return (
    <div className='bg-black  bg-cover flex justify-center items-center h-[90vh]' style={{ backgroundImage: ` url(${BG})` }}>
      <div className='flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl'>
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" /><br />
        <h1 className='text-white text-3xl font-bold'>Welcome to KRS</h1><br /><br />
        <input
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded'
          type="email"
          name="email"
          id="email"
          placeholder='Enter email address'
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <br />
        <input
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded'
          type="password"
          name="password"
          id="password"
          placeholder='Password'
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <h2 className='text-white leading-10'><Link to='/signin' >forgot password?</Link><Link style={{ color: "blue" }} to='/signup' > SignUp</Link></h2><br />
        <button className='w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold' onClick={login}>Log in</button>
      </div>
      {showError === "" ? "" : <Error msg={showError} />}
    </div>
  )
}

export default SigninMain