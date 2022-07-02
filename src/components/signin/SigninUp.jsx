import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import KRS from '../../public/krslogo.jpg'
import BG from '../../public/dronebackground.jpg'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context';
import { useEffect } from 'react'

function SigninUp() {
  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();
  const signup = () => {

    authCtx.login("dede", 1000)
    redirect('/')
  }

  return (
    <div className='bg-black  bg-cover flex justify-center items-center h-[100%]' style={{ backgroundImage: ` url(${BG})` }}>
      <div className='flex mt-10 mb-10 flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl  backdrop-blur-2xl'>
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" /><br />
        <h1 className='text-white text-3xl font-bold'>Sign Up</h1><br /><br />
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="text" name="" id="email" placeholder='Enter Name' /><br />
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="text" name="" id="email" placeholder='Enter KIIT email addres' /><br />
        <select className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded' name="branch" id="email" >
          <option selected disabled hidden>Select Branch</option>
          <option value={"CSE"} >CSE</option>
          <option value={"CSE"} >CSSE</option>
          <option value={"CSE"} >CSCE</option>
          <option value={"CSE"} >IT</option>
          <option value={"CSE"} >ETC</option>
          <option value={"CSE"} >EEE</option>
          <option value={"CSE"} >ECS</option>
          <option value={"CSE"} >E&I</option>
          <option value={"CSE"} >Electrical</option>
          <option value={"CSE"} >CIVIL</option>
          <option value={"CSE"} >Mech</option>
          <option value={"CSE"} >Mechtronics</option>
          <option value={"CSE"} >Aerospace</option>
          <option value={"CSE"} >Mass Comunication</option>
          <option value={"CSE"} >Medical Sciences</option>
          <option value={"CSE"} >Dental Sciences</option>
          <option value={"CSE"} >Nursing  Sciences</option>
        </select>
        <select className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded' name="year" id="email" >
          <option selected disabled hidden>Select Year</option>
          <option value={"CSE"} >1st</option>
          <option value={"CSE"} >2nd</option>
          <option value={"CSE"} >3rd</option>
          <option value={"CSE"} >4th</option>

        </select>
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Password' />
        <br />
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Confirm Password' />
        <br />
        <button className='w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold' onClick={signup}>Sign Up</button>
      </div>
    </div>
  )
}



export default SigninUp