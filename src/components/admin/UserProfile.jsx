import React, { useState,useContext,useRef } from 'react'
import PP from '../../public/pp.jpeg'
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import UserEventCard from './components/UserEventCard';
import loading from '../../public/loading.svg'

import { useEffect, } from 'react';

function UserProfile() {
    const [qrimg,setQrimg]=useState("")
    const [userinfo,setUserinfo]=useState({})
    const [events,setEvents]=useState([])
    const joincode=useRef("")
    // modal state
    const [showModal, setShowModal] = useState(false);

    // create team modal state
    const [showteammodal, setShowTeamModal] = useState({status:false,teamexist:false,teaminfo:{},info:{}});

    const [teamfull,setTeamfull]=useState(false)


    const [loadin,setLoadin]=useState(false)

    const authCtx = useContext(AuthContext);
  
 useEffect(()=>{


  async function makereq(){
    const resp = await axios.post("/api/user/",{email:authCtx.user.email},{headers:{ "Authorization": `${authCtx.token}`}});
    const data=resp.data;
    setUserinfo(data.users)
    setEvents(data.userevents)
    console.log(data)    
  }

  makereq()
 },[])

const leaveteam=async(code,info)=>{
try{
  setLoadin(true)
  const resp = await axios.post(
    `/api/registration/register/leaveteam/`,
    { email: userinfo.email,code:code, sheetid: info.sid, formid: info.fid },
    { headers: { Authorization: `${authCtx.token}` } }
  );
  setLoadin(false)
  const data = resp.data;
  console.log(data)
 
  if(data.success==true){
    setShowTeamModal({status:false,teamexist:false,teaminfo:{},info:info})
  }
}catch(e){
console.log(e)
}
}
const jointeam=async(info)=>{
  const code=joincode.current.value
  try{
    setLoadin(true)
    const resp = await axios.post(
      `/api/registration/register/jointeam/`,
      { email: userinfo.email,code:code, sheetid: info.sid, formid: info.fid },
      { headers: { Authorization: `${authCtx.token}` } }
    );
    setLoadin(false)
    const data = resp.data;
    console.log(data)
   
    if(data.success==true){
      setShowTeamModal({status:false,teamexist:false,teaminfo:{},info:info})
    }else if(data.msg="full"){
      setTeamfull(true)
    }else if(data.msg=""){
      setTeamfull(false)
    }
  }catch(e){
  console.log(e)
  }
  }
  const createteam=async(info)=>{
    try{
      setLoadin(true)
      const resp = await axios.post(
        `/api/registration/register/createteam/`,
        { email: userinfo.email,sheetid: info.sid, formid: info.fid },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      setLoadin(false)
      const data = resp.data;
      console.log(data)
     
      if(data.success==true){
        setShowTeamModal({status:false,teamexist:true,teaminfo:resp.data.teaminfo,info:info})
      }else{

      }
    }catch(e){
    console.log(e)
    }
    }
  
  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        <div className='flex justify-between items-end'>
            <img className='rounded-full w-64 h-64' src={PP} alt="" />
            <h1 className='text-white text-4xl font-bold text-right'>Shashank Jaiswal <br /> 2005405</h1>
        </div>
        <hr className=" mt-2 border-t-4 border-white pb-16" />

        

        <div className={`w-full py-10 px-[5%] justify-items-center grid grid-cols-1`}>
          {events.map((eventsData,i) => {

            return (
              <UserEventCard key={i} re={showteammodal} email={userinfo.email}  eventsData={eventsData} qrimg={setQrimg} qrmodal={setShowModal} teammodal={setShowTeamModal}/>
              )
          })}
         {events.length==0 && <center><div className='text-white'>No Registered Events</div></center>}
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
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => {setShowModal(false),setQrimg("")}}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex justify-center px-16 py-8">
                {qrimg=="" && <img src={loading} className="h-14 w-14" alt='mySvgImage' />} 
                  <img src={qrimg} alt="" />

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold px-6 py-2" type="button" onClick={() => {setShowModal(false),setQrimg("")}}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

          {/* join team modal */}
      {showteammodal.status ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">{showteammodal.teamexist && "Team Details"}
                  {!showteammodal.teamexist && "Create or Join a Team"}
                  {showteammodal.teamexist && <p className='text-yellow-300 text-sm'>Team code : {showteammodal.teaminfo.code}</p>}
                  </h3>
                  
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowTeamModal({status:false,teamexist:false})}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                {loadin==false &&  <>
                <div className="flex-1 justify-center items-center">
                  {!showteammodal.teamexist &&     <div className="py-2 px-4">
                            <h2 className="text-xl p-1 my-1 text-white">Enter Team Code</h2>
                            <div className='flex'>
                                <input ref={joincode} className="text-lg w-2/3 py-0.5 px-1 mx-1 rounded" placeholder='Enter team code' type="text" name='name'/>
                                <button onClick={()=>{jointeam(showteammodal.info)}} className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Join</button>
                            </div>
                            <h1 className='text-white py-4 text-center font-semibold text-xl'>Or</h1>
                    </div>}
                    {showteammodal.teamexist &&
                        <div className='flex-col px-4 my-2  text-white'>
                        <center><div className='font-bold'>Members - {showteammodal.teaminfo.num}/{showteammodal.info.teamsize}</div></center>
                           <br/>
                            {showteammodal.teaminfo.members.map((e)=>{
                            return(
                              <p>
                                {e.name} - {e.roll} <span className='text-green-300'>{e.leader=="TRUE"?"( Leader )":""}</span>
                              </p>
                            )
})}
                        </div>
                    }
                        
                        <div className="py-2 px-4 flex justify-center">
                        {!showteammodal.teamexist && <button onClick={()=>createteam(showteammodal.info)} className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Create Team</button>  }
                        {showteammodal.teamexist && <button onClick={()=>leaveteam(showteammodal.teaminfo.code,showteammodal.info)}  className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Leave Team</button>  }

                        </div>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold px-6 py-2" type="button" onClick={() => setShowTeamModal({status:false,teamexist:false})}>Close</button>
                </div>
                </>
}
{loadin==true && <center><img src={loading} className="h-52 w-52 my-1" alt='mySvgImage' /></center>}
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