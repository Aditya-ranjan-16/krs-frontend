import React, { useState,useContext } from 'react'
import { Link } from "react-router-dom";
import PP from '../../public/pp.jpeg'
import qrbg from '../../public/qrbg.jpg'
import qr from '../../public/qr.png'
import QRCode from 'qrcode'
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import { useEffect } from 'react';

function UserProfile() {
    const [qrimg,setQrimg]=useState("")
    const [userinfo,setUserinfo]=useState({})
    const [events,setEvents]=useState([])

    const authCtx = useContext(AuthContext);
 useEffect(()=>{
 
  async function makereq(){
    const resp = await axios.post("/api/user/",{email:"2005428@kiit.ac.in"},{headers:{ "Authorization": `${authCtx.token}`}});
    const data=resp.data;
    setUserinfo(data.users)
    setEvents(data.userevents)
    console.log(data)    
  }

  makereq()
 },[])
 const generateQR = async (sid,fid) => {

  try {
    const resp = await axios.post(`/api/registration/register/checkreg/`,{email:userinfo.email,sheetid:sid,formid:fid},{headers:{ "Authorization": `${authCtx.token}`}});
    const data=resp.data
    if(data.reg==true){
      setShowModal(true)
    }else{
      return
    }
    const imgurl=await QRCode.toDataURL(data.code)
    setQrimg(imgurl)
   
  } catch (err) {
    console.error(err)
  }
}
  // modal state
  const [showModal, setShowModal] = useState(false);

  // create team modal state
  const [showteammodal, setShowTeamModal] = useState(false);
  

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        <div className='flex justify-between items-end'>
            <img className='rounded-full w-64 h-64' src={PP} alt="" />
            <h1 className='text-white text-4xl font-bold text-right'>Shashank Jaiswal <br /> 2005405</h1>
        </div>
        <hr className=" mt-2 border-t-4 border-white pb-16" />

        

        <div className={`w-full py-10 px-[5%] justify-items-center grid grid-cols-1`}>
          {events.map((eventsData) => {
            return (
                <div className='px-5 py-5 border-2 rounded-xl border-yellow-500 my-5 w-1/2'>
                  <div className='text-white w-full py-5 px-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between w-full'>
                      <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-semibold pb-8 text-center md:text-left text-yellow-500'>{eventsData.title}</h1>
                      <div>
                        <h2 className='text-base sm:text-xl text-yellow-500'>{eventsData.date}</h2>
                        <h2 className='text-base sm:text-xl text-yellow-500'>{eventsData.venue}</h2>
                      </div>
                    </div>
                    <div className='w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] py-2 px-2'>
                      <img className='w-full h-full rounded-xl' src={eventsData.thumbnil[0]} alt="" />
                    </div>
                    <div className="flex space-x-4 pt-3">
                      <div className="text-white" onClick={() => generateQR(eventsData.sheetid,eventsData.registrationformid)} to=""><img className='w-7' src={qr} alt="qr" /></div>      
                      <button className="text-white bg-yellow-500 rounded-lg font-bold px-2 py-1" onClick={() => setShowTeamModal(true)}>Join/Create a Team</button>
                      <span className='bg-yellow-800 p-1 -skew-x-12'>Registered</span>
                    </div>

                  </div>
                </div>
              )
          })}

        {/* qr modal */}
        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    QR Code
                  </h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex justify-center px-16 py-8">
                  <img src={qrimg} alt="" />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold px-6 py-2" type="button" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

          {/* join team modal */}
      {showteammodal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">Create or Join a Team</h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowTeamModal(false)}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex-1 justify-center items-center">
                        <div className="py-2 px-4">
                            <h2 className="text-xl p-1 my-1 text-white">Enter Team Code</h2>
                            <div className='flex'>
                                <input className="text-lg w-2/3 py-0.5 px-1 mx-1 rounded" placeholder='Enter team code' type="text" name='name'/>
                                <button className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Join</button>
                            </div>
                        </div>
                        <h1 className='text-white py-4 text-center font-semibold text-xl'>Or</h1>
                        <div className="py-2 px-4 flex justify-center">
                            <button className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Create a Code</button>
                        </div>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold px-6 py-2" type="button" onClick={() => setShowTeamModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          
        </div>
        

    </div>
  )
}

export default UserProfile