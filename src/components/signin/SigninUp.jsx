import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import KRS from '../../public/krslogo.jpg'
import BG from '../../public/dronebackground.jpg'
import AuthContext from '../../store/auth-context';

function SigninUp() {
  const [showUser, setUser] = useState({ name: "", email: "", Branch: "", Year: "", password: "", cpassword: "", });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const signup = () => {
    const { name, email, Branch, Year, password, cpassword } = showUser;
    if (name !== "" && email !== "" && Branch !== "" && Year !== "" && password !== "" && cpassword !== "") {

      if (password === cpassword) {
        // authCtx.login("dede", 1000)
        // redirect('/')
        e.target.style.border = "2px solid  transparent";
      } else {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";

      }
    } else {
      console.log("Error")
    }

  }

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    } else if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }

    setUser({ ...showUser, [name]: value });
  }

  return (
    <div className='bg-black  bg-cover flex justify-center items-center h-[100%]' style={{ backgroundImage: ` url(${BG})` }}>
      <div className='flex mt-10 mb-10 flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl  backdrop-blur-2xl'>
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" /><br />
        <h1 className='text-white text-3xl font-bold'>Sign Up</h1><br /><br />
        <input
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="text" name="name" id="email" placeholder='Enter Name' /><br />
        <input
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="email" name="email" id="email" placeholder='Enter KIIT email addres' /><br />
        <select
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded' name="Branch" id="email" >
          <option selected disabled hidden>Select Branch</option>
          <option value={"CSE"}>CSE</option>
          <option value={"CSSE"}>CSSE</option>
          <option value={"CSCE"}>CSCE</option>
          <option value={"IT"}>IT</option>
          <option value={"ETC"}>ETC</option>
          <option value={"EEE"}>EEE</option>
          <option value={"ECS"}>ECS</option>
          <option value={"EE&I"}>E&I</option>
          <option value={"Electrical"}>Electrical</option>
          <option value={"CIVIL"}>CIVIL</option>
          <option value={"Mech"}>Mech</option>
          <option value={"Mechtronics"}>Mechtronics</option>
          <option value={"Aerospace"}>Aerospace</option>
          <option value={"Mass Comunication"}>Mass Comunication</option>
          <option value={"Medical Sciences"}>Medical Sciences</option>
          <option value={"Dental Sciences"}>Dental Sciences</option>
          <option value={"Nursing Sciences"}>Nursing  Sciences</option>
        </select>
        <select
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded' name="Year" id="email" >
          <option selected disabled hidden>Select Year</option>
          <option value={"1st"} >1st</option>
          <option value={"2nd"} >2nd</option>
          <option value={"3rd"} >3rd</option>
          <option value={"4th"} >4th</option>

        </select>
        <input
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="password" name="password" id="password" placeholder='Password' />
        <br />
        <input
          onChange={PostData}
          className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="password" name="cpassword" id="password" placeholder='Confirm Password' />
        <br />
        <button className='w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold' onClick={signup}>Sign Up</button>
      </div>
    </div>
  )
}



export default SigninUp