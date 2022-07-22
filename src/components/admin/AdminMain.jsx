import React from 'react'
import AdminEvents from './AdminEvents'
import AdminMembers from './AdminMembers'
import AdminSidebar from './AdminSidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
//   const authCtx = useContext(AuthContext);
//   const [level,setLevel]=useState();
//   useEffect(()=>{
// async  function makerq(){
//       try{
  
//        const resp = await axios.post("/api/login/getlevel", {token:authCtx.token},{headers:{ "Authorization": ``}});
//        const data=resp.data;

//       }catch(err){
//         console.error(err);
//       }
//     }
//     makerq();
//   },[])

  return (
    <div className='flex bg-black'>
      <AdminSidebar />
      <Routes>
        <Route path='/adminmembers' element={<AdminMembers />} />
        <Route path='/adminevents' element={<AdminEvents />} />
        <Route path='/adminachievements' element={<AdminAchievements />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/createteam' element={<CreateTeam />} />
        <Route path='/memberprofile' element={<MemberProfile />} />
        <Route path='/forms' element={<Forms />} />
      </Routes>

    </div>
  )
}

export default AdminMain