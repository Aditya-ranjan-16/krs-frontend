import React from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";

export default function ForgetPassword() {
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
          //   onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          //   onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />

        {/* {show ? <p className="alertText">{show}</p> : ""} */}

        <br />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold"
          //   onClick={login}
        >
          Log in
        </button>
        <div id="SignInDiv"></div>
        <br />
      </div>
    </div>
  );
}
