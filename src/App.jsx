import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Recruitment from "./pages/Recruitment";
import ForgetPassword from "./pages/ForgetPassword";
import EnterOTP from "./pages/EnterOTP";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Achievementss from "./pages/Achievements";
import Collaborations from "./pages/Collaborations";
import ContactUs from "./pages/ContactUs";
import Featured from "./pages/Featured";
import Admin from "./pages/Admin";
import AuthContext from "./store/auth-context";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/achievements" element={<Achievementss />} />
          {!authCtx.isLoggedIn && <Route path="/signin" element={<Signin />} />}
          {!authCtx.isLoggedIn && <Route path="/signup" element={<Signup />} />}
          {!authCtx.isLoggedIn && (
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/EnterOTP" element={<EnterOTP />} />
          )}
          <Route path="/featured" element={<Featured />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contactus" element={<ContactUs />} />
          {authCtx.isLoggedIn && <Route path="/admin/*" element={<Admin />} />}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
