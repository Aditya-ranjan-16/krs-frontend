import React, { useEffect, useState, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { Link, useNavigate } from "react-router-dom";
import "./css/Sign.css";

export default function UserData() {
  const [showData, setData] = useState({
    roll: "",
    branch: "",
    year: "",
    number: "",
  });
  const [show, set] = useState("");

  const redirect = useNavigate();

  const authCtx = useContext(AuthContext);

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value == "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }

    setData({ ...showData, [name]: value });
  };

  const sendOtp = async () => {
    const { roll, branch, year, number } = showData;
    if (roll === "" || branch === "" || year === "" || number === "") {
      set("Enter all the details");
    } else {
      set("");
      let newUserName = localStorage.getItem("newUserName");
      let newUserEmail = localStorage.getItem("newUserEmail");
      let newUserPicture = localStorage.getItem("newUserPicture");

      newUserName = newUserName.substring(1, newUserName.length - 1);
      newUserEmail = newUserEmail.substring(1, newUserEmail.length - 1);
      newUserPicture = newUserPicture.substring(1, newUserPicture.length - 1);

      console.log(newUserName);
      console.log(newUserEmail);
      console.log(newUserPicture);

      let data = {
        roll,
        branch,
        year,
        number,
        name: newUserName,
        email: newUserEmail,
        image: newUserPicture,
      };

      const resp = await axios.post(`/api/user/add`, data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(resp);
      if (resp.status === 200) {
        localStorage.removeItem("newUserName")
        localStorage.removeItem("newUserEmail")
        localStorage.removeItem("newUserPicture")
        const info=resp.data.user
        await authCtx.login(info.name,info.email,info.pic,resp.data.token, 3600000);
        set("");
        redirect("/admin");
      } else if (resp.status === 202) {
        redirect("/admin");
      } else {
        set("Error");
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
        <h1 className="text-white text-3xl font-bold">Enter all the Details</h1>
        <br />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="number"
          name="year"
          placeholder="Year"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="text"
          name="branch"
          placeholder="Branch"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="number"
          name="roll"
          placeholder="Roll"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="number"
          name="number"
          placeholder="Number"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        {show ? (
          <p className="alertTextOTP font-bold tracking-wide my-5">{show}</p>
        ) : (
          ""
        )}
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          onClick={sendOtp}
        >
          Submit
        </button>
     
        <br />
      </div>
    </div>
  );
}
