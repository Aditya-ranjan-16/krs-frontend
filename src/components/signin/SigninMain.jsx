import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import KRS from '../../public/krslogo.jpg'
import BG from '../../public/dronebackground.jpg'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../store/auth-context';

function SigninMain() {
  const authCtx = useContext(AuthContext);
  const redirect=useNavigate();
const login=()=>{
  authCtx.login("dede",1000)
  redirect('/')
}

  return (
    <div className='bg-black  bg-cover flex justify-center items-center h-[90vh]' style={{backgroundImage: ` url(${BG})`}}>
      <div className='flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl'>
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" /><br />
        <h1 className='text-white text-3xl font-bold'>Welcome to KRS</h1><br /><br />
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="text" name="" id="email" placeholder='Enter email address' /><br />
        <input className='w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Password' />
        <h2 className='text-white leading-10'><Link to='/signin' >forgot password?</Link></h2><br />
        <button className='w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold' onClick={login}>Log in</button>
      </div>
    </div>
  )
}

export default SigninMain