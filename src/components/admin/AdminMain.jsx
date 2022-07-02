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

function AdminMain() {
  return (
    <div className='flex bg-black'>
      <AdminSidebar />
      <Routes>
        <Route path='/adminmembers' element={<AdminMembers />} />
        <Route path='/adminevents' element={<AdminEvents />} />
        <Route path='/adminachievements' element={<AdminAchievements />} />
        <Route path='/userprofile' element={<UserProfile /> } />
        <Route path='/createteam' element={<CreateTeam /> } />
        <Route path='/memberprofile' element={<MemberProfile /> } />
        <Route path='/forms' element={<Forms /> } />
      </Routes>
      
    </div>
  )
}

export default AdminMain