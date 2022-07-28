import React from 'react'
import { Link } from "react-router-dom";

function AdminSidebar({level}) {
  return (
    <div className="relative flex min-h-screen">
        <div className="w-64 flex flex-col bg-[#111111] text-white sticky">
        {level=="admin" && <Link to="/admin/adminmembers" className="py-2 text-center">Members</Link>}
        {level=="admin" && <Link to="/admin/adminevents" className="py-2 text-center">Events</Link>}
        {level=="admin" && <Link to="/admin/adminachievements" className="py-2 text-center">Achievements</Link>}
        {level=="user" && <Link to="/admin/userprofile" className="py-2 text-center">User Profile</Link>}
        {level=="member" &&  <Link to="/admin/memberprofile" className="py-2 text-center">Member Profile</Link>}
        {level=="admin" &&  <Link to="/admin/forms" className="py-2 text-center">Forms</Link>}
        </div>
    </div>
  )
}

export default AdminSidebar