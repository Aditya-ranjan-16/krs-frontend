import React,{useContext} from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../../store/auth-context';

function AdminSidebar({level}) {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const logoutme=()=>{
    redirect('/')
    authCtx.logout()
 
  }
  return (
    <div className="relative flex min-h-screen ">
        <div className="w-64 flex max-h-[87vh] flex-col bg-[#111111] text-white sticky top-20">
        {level=="admin" && <Link to="/admin/adminmembers" className="py-2 text-center">Members</Link>}
        {level=="admin" && <Link to="/admin/adminevents" className="py-2 text-center">Events</Link>}
        {level=="admin" && <Link to="/admin/adminachievements" className="py-2 text-center">Achievements</Link>}
        {level=="user"  && <Link to="/admin/userprofile" className="py-2 text-center ">User Profile</Link>}
        {level=="member"  &&  <Link to="/admin/memberprofile" className="py-2 text-center">Member Profile</Link>}
        {level=="admin" &&  <Link to="/admin/forms" className="py-2 text-center">Forms</Link>}
        <button onClick={logoutme} className="py-2 text-center mt-auto">Log out</button>
        </div>
     
    </div>
  )
}

export default AdminSidebar