import React from 'react'
import AdminEvents from './AdminEvents'
import AdminMembers from './AdminMembers'
import AdminSidebar from './AdminSidebar'
import bg from '../../public/bg.png'
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import AdminAchievements from './AdminAchievements';
import UserProfile from './UserProfile';
import MemberProfile from './MemberProfile';
import Forms from './Forms';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../store/auth-context';

function AdminMain() {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  let location = useLocation();
  var cl=location.pathname=="/admin"?cl+1:0
  const [level,setLevel]=useState("none");
  useEffect(()=>{
async  function makerq(){
      try{
       console.log("location",location)
       const resp = await axios.post("/api/login/getlevel", {},{headers:{ "Authorization": `${authCtx.token}`}});
       const data=resp.data;
       setLevel(data.desig)
       console.log(data.desig)
       if(data.desig=="admin"){
        redirect("/admin/adminevents")
       }else if(data.desig=="user"){
        redirect("/admin/userprofile")
       }
    
      }catch(err){
        console.error(err);
      }
    }
    makerq();
    
  },[cl])

  return (
    <div className="bg-black flex bg-cover bg-bottom bg-fixed" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <AdminSidebar level={level} />
      <Routes>
       {level=="admin" &&  <Route path='/adminmembers' element={<AdminMembers />} />}
       {level=="admin" &&  <Route path='/adminevents' element={<AdminEvents level={level} />} />}
       {level=="admin" &&  <Route path='/adminachievements' element={<AdminAchievements />} />}
       {level=="user" && <Route path='/userprofile' element={<UserProfile  />} />}
       {level=="member" &&<Route path='/memberprofile' element={<MemberProfile />} />}
       {level=="admin" && <Route path='/forms' element={<Forms />} />}
      </Routes>

    </div>
  )
}

export default AdminMain