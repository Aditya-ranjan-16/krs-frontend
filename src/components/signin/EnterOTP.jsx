import React, { useState, useEffect, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function EnterOTP() {
  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center "
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl  mt-5 mb-5">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Enter the OTP</h1>
        <br />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="email"
          name="email"
          id="email"
          placeholder="OTP"
          // onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          // onClick={sendOtp}
        >
          Submit
        </button>
        <div id="SignInDiv"></div>
        <br />
      </div>
    </div>
  );
}
