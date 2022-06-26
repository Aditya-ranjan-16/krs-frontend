import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';
import Recruitment from './pages/Recruitment';
import Signin from './pages/Signin';
import AboutUs from './pages/AboutUs';
import Achievementss from './pages/Achievements';
import Collaborations from './pages/Collaborations';
import ContactUs from './pages/ContactUs';
import Featured from './pages/Featured';
import Admin from './pages/Admin';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/members' element={<Members/>} />
          <Route path='/recruitment' element={<Recruitment/>} />
          <Route path='/achievements' element={<Achievementss />} />
          {!(authCtx.isLoggedIn) && <Route path='/signin' element={<Signin/>} /> }
          <Route path='/featured' element={<Featured />} />
          <Route path='/collaborations' element={<Collaborations />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
