import qr from "../../../public/qr.png";
import QRCode from "qrcode";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../store/auth-context";
import loading from '../../../public/loading.svg'
const UserEventCard = ({ eventsData, re,teammodal, qrmodal, qrimg, email }) => {
  const authCtx = useContext(AuthContext);
  const [teamexist,setTeamexist]=useState({status:false,teaminfo:{}})
  const [loadin,setLoadin]=useState(false)
  useEffect(() => {
    async function makereq() {
      try {
        setLoadin(true)
        const resp = await axios.post(
            `/api/registration/register/teamstatus/`,
            { email: email, sheetid: eventsData.sheetid,formid:eventsData.registrationformid  },
            { headers: { Authorization: `${authCtx.token}` } }
          );
          setLoadin(false)
          if(resp.data.exist==true){
             setTeamexist({status:true,teaminfo:resp.data.teaminfo})
          }else{
            setTeamexist({status:false,teaminfo:{},info:{sid:eventsData.sheetid,fid:eventsData.registrationformid}})
          }
      } catch (e) {
      console.log(e)
      }
    }
    makereq();
  }, [re]);
  const generateQR = async (sid, fid) => {
    try {
      qrmodal(true);
      const resp = await axios.post(
        `/api/registration/register/checkreg/`,
        { email: email, sheetid: sid, formid: fid },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      const data = resp.data;
      if (data.reg == true) {

      } else {
        return;
      }
      const imgurl = await QRCode.toDataURL(data.code);
      qrimg(imgurl);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="px-5 py-5 border-2 rounded-xl border-yellow-500 my-5 w-1/2">
      <div className="text-white w-full py-5 px-5 flex flex-col justify-between items-center">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-semibold pb-8 text-center md:text-left text-yellow-500">
            {eventsData.title}
          </h1>
          <div>
            <h2 className="text-base sm:text-xl text-yellow-500">
              {eventsData.date}
            </h2>
            <h2 className="text-base sm:text-xl text-yellow-500">
              {eventsData.venue}
            </h2>
          </div>
        </div>
        <div className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] py-2 px-2">
          <img
            className="w-full h-full rounded-xl"
            src={eventsData.thumbnil[0]}
            alt=""
          />
        </div>
        <div className="flex space-x-4 pt-3">
          <div
            className="text-white"
            onClick={() =>
              generateQR(eventsData.sheetid, eventsData.registrationformid)
            }
            to=""
          >
            <img className="w-7" src={qr} alt="qr" />
          </div>
          {
            (eventsData.teamcreation = "Allowed" && loadin==false && (
              <button
                className="text-white bg-yellow-500 rounded-lg font-bold px-2 py-1"
                onClick={() =>{ teammodal({status:true,teamexist:teamexist.status,teaminfo:teamexist.teaminfo,info:{sid:eventsData.sheetid,fid:eventsData.registrationformid,teamsize:eventsData.teamsize}})}}
              >
                {teamexist.status && "View Team"}
                {!teamexist.status && "Join/Create Team"}
              </button>
            ))
          }
          {loadin==true && <img src={loading} className="h-10 w-10" alt='mySvgImage' />}
          <span className="bg-yellow-800 p-1 -skew-x-12">Registered</span>
        </div>
      </div>
    </div>
  );
};

export default UserEventCard;
