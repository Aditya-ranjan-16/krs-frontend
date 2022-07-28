import React, { useState, useEffect, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";

export default function ForgetPassword() {
  const [showEmail, setEmail] = useState();

  const authCtx = useContext(AuthContext);

  const url = "http://localhost:5000/";

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }

    setEmail(value);
  };

  const sendOtp = async () => {
    if (showEmail.indexOf("@") === -1 || showEmail.indexOf(".") === -1) {
      console.log("Error");
    } else {
      var email = showEmail;
      const resp = await axios.post(
        `${url}api/login/forgotPassword/sendEmail/${email}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (resp.status == 200) {
        console.log(resp.data);
        console.log(resp.status);
      }
    }
  };

  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center "
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl  mt-5 mb-5">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Forget Password</h1>
        <br />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          onClick={sendOtp}
        >
          Send OTP
        </button>
        <div id="SignInDiv"></div>
        <br />
      </div>
    </div>
  );
}
