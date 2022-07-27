import React from 'react'
import AdminEvents from './AdminEvents'
import AdminMembers from './AdminMembers'
import AdminSidebar from './AdminSidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import AdminAchievements from './AdminAchievements';
import UserProfile from './UserProfile';
import CreateTeam from './CreateTeam';
import MemberProfile from './MemberProfile';
import Forms from './Forms';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../store/auth-context';

function AdminMain() {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const [level,setLevel]=useState("none");
  useEffect(()=>{
async  function makerq(){
      try{
  
       const resp = await axios.post("/api/login/getlevel", {},{headers:{ "Authorization": `${authCtx.token}`}});
       const data=resp.data;
       setLevel(data.desig)
       console.log(data.desig)
       if(data.desig=="admin"){
        redirect("/admin/adminevents")
       }
    
      }catch(err){
        console.error(err);
      }
    }
    makerq();
  },[])

  return (
    <div className='flex bg-black'>
      <AdminSidebar level={level} />
      <Routes>
       {level=="admin" &&  <Route path='/adminmembers' element={<AdminMembers />} />}
       {level=="admin" &&  <Route path='/adminevents' element={<AdminEvents level={level} />} />}
       {level=="admin" &&  <Route path='/adminachievements' element={<AdminAchievements />} />}
       {level=="user" && <Route path='/userprofile' element={<UserProfile />} />}
       {level=="member" &&<Route path='/memberprofile' element={<MemberProfile />} />}
       {level=="admin" && <Route path='/forms' element={<Forms />} />}
      </Routes>

    </div>
  )
}

export default AdminMain