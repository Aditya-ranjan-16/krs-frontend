import React, { useState, useEffect, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ChangePass() {
  const [showData, setData] = useState({ password: "", cpassword: "" });
  const [show, set] = useState("");
  const [showE, setE] = useState("");
  const [redirect, setRedirect] = useState(5);

  const authCtx = useContext(AuthContext);
  const url = "http://localhost:5000/";
  const navigate = useNavigate();

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const SendData = async (e) => {
    try {
      let email = localStorage.getItem("email");
      const FEmail = email.substring(1, email.length - 1);

      let data = {
        email: FEmail,
        password: showData.password,
        cpassword: showData.cpassword,
      };

      const resp = await axios.post(`api/login/resetPassword/`, data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (resp.status === 200) {
        window.setTimeout(function () {
          window.location.href = "/signin";
        }, 5000);

        setRedirect("Redirecting...");

        set("Password changed Successfully");
        setE("");
        return;
      }
    } catch (error) {
      set("");
      setE("Error");
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
        {show ? (
          <div className="text-white font-bold tracking-wide">
            {show}
            <br />
            <p className="text-amber-400 tracking-widest">{redirect}</p>
          </div>
        ) : (
          ""
        )}
        {showE ? <p className="alertTextOTP">{showE}</p> : ""}
      </div>
    </div>
  );
}
