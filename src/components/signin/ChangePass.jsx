import React, { useState, useEffect, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function ChangePass() {
  const [showData, setData] = useState({ password: "", cpassword: "" });

  useEffect(() => {
    console.log(showData);
  }, [showData]);

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const SendData = async (e) => {
    console.log(showData);
  };

  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center "
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl  mt-5 mb-5">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Reset your Password</h1>
        <br />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="text"
          name="password"
          placeholder="Enter Your Password"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />

        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="text"
          name="cpassword"
          placeholder="Conform Your Password"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          onClick={SendData}
        >
          Submit
        </button>
        <div id="SignInDiv"></div>
        <br />
      </div>
    </div>
  );
}
