import React, { useState } from "react";
import { Link } from "react-router-dom";
import krslogo from "./krslogo.jpg";
import kiitlogo from "./kiitlogo.jpg";
import ksaclogo from "./ksaclogo.png";
import { useContext } from "react";
import AuthContext from "../../store/auth-context"; 
import menu from "../../public/menu1.png";

function Navbar() {
  const [visible, setVisible] = useState("right-[100%]");
  const authCtx=useContext(AuthContext)
  console.log(visible);
  function menuClick() {
    console.log("clicked");
    if (visible) {
      setVisible("");
    } else if (visible === "") {
      setVisible("right-[100%]");
    }
  }
  return (
    <>
      <nav className="bg-[#111111] w-full sticky top-0 z-50">
        <div className="mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="flex">
                <Link to="/" className="flex items-center py-5 px-1">
                  <img className="w-10 rounded-full ml-4 cursor-pointer" src={krslogo} alt="KRS" />
                </Link>
                <Link to="/" className="flex items-center py-5 px-1">
                  <img className="w-10 rounded-full ml-4 cursor-pointer" src={kiitlogo} alt="KIIT" />
                </Link>
                <Link to="/" className="flex items-center py-5 px-1">
                  <img className="w-10 rounded-full ml-4 cursor-pointer" src={ksaclogo} alt="KSAC" />
                </Link>
              </div>
              {/* primary nav */}
              <div className="hidden lg:flex items-center space-x-2 text-lg">
                <Link to="/" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Home
                </Link>
                <Link to="/aboutus" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  About Us
                </Link>
                <Link to="/featured" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Featured
                </Link>
                <Link to="/events" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Events
                </Link>
                <Link to="/achievements" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Achievements
                </Link>
                <Link to="/members" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Members
                </Link>
                <Link to="/contactus" className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2">
                  Contact Us
                </Link>
                {/* <Link to="/admin" className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2">
                  Admin
                </Link> */}
              </div>
            </div>
            {/* secondary nav */}
            {authCtx.isLoggedIn &&   <div className="ppic lg:flex my-5 px-4 rounded-[100px] font-semibold text-white  items-center text-sm">
               <div className="ppic_text">
               A
                </div>    

            </div> }
            {!(authCtx.isLoggedIn) &&
             <div className="hidden lg:flex my-4 rounded-full font-medium  bg-yellow-500 items-center text-lg">
             <Link to="/signin" className="py-1 px-3 hover:text-black rounded transition duration-300">
               Log in
             </Link>
           </div>
            }
           
            {/* mobile button goes here */}
            <div className="lg:hidden flex items-center">
              <button className="mobile-menu-button" onClick={menuClick}>
                <img className="w-6 fill-yellow-500 cursor-pointer" src={menu} alt="menu" />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`mobile-menu  flex flex-col ${visible} text-white font-semibold bg-[#000000e4] w-full h-[100vh] items-center absolute   lg:hidden`}>
          <Link to="/" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Home
          </Link>
          <hr className="w-[50%]" />
          <Link to="/About" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            About Us
          </Link>
          <hr className="w-[50%]" />
          <Link to="/Featured" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Featured
          </Link>
          <hr className="w-[50%]" />
          <Link to="/Events" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Events
          </Link>
          <hr className="w-[50%]" />
          <Link to="/Achievements" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Achievements
          </Link>
          <hr className="w-[50%]" />
          <Link to="/Members" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Members
          </Link>
          <hr className="w-[50%]" />
          <Link to="/contactus" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Contact Us
          </Link>
          <hr className="w-[50%]" />
          <Link to="/signin" className="block py-2 px-4 my-1 text-sm hover:bg-gray-200">
            Log in
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
