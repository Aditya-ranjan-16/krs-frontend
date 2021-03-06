import React, { useState } from "react";
import { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import Question from "./Question";
import { eventsData } from "../events/EventMain";

function Form() {
  let{fid} =useParams()
  const [showForm, setFormStatus] = useState(false);
  const [eventinfo, setEventinfo] = useState();
  const [orderid, setOrderid] = useState("");
  const [formdata, setFormdata] = useState();
  const authCtx = useContext(AuthContext);
useEffect(()=>{
  async function makereq (){
    try{
      const resp = await axios.get(`/api/form/getForms/${fid}`);
      const formdata=resp.data.form;
      const eventdata=resp.data.event;
      console.log(formdata)
      console.log(eventdata.title)

      if(formdata.type=="Registration" && eventdata.price>0){
      const resp2 = await axios.post(`/api/registration/register/createOrder/`,{price:eventdata.price},{headers:{ "Authorization": `${authCtx.token}`}});
      const orderid=resp2.data.orderId;
      setOrderid(orderid)
      }

      setFormdata(formdata)
      setEventinfo(eventdata)
    }catch(e){
    console.log(e)
    }
  
   } 
   makereq();


},[fid])

  const viewData = () => setFormStatus(true);
  return (
    <div className="flex justify-center items-center xl:border-r-2 xl:border-t-0 lg:border-r-2 lg:border-t-0 md:border-t-2 sm:border-t-2 h-96 border-yellow-500 xl:w-[60%] lg:w-[60%] md:w-[100%] sm:w-[100%] ">
      {!showForm && (
        <div>
          <text className="text-yellow-500 font-bold text-7xl lg:text-7xl md:text-5xl sm:text-5xl underline underline-offset-4 decoration-stone-200">
            Hello!
          </text>

          <div className="flex justify-center mt-10">
            <a href="#Questions">
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded font-semibold  mr-5 text-xl lg:text-xl md:text-sm sm:text-sm"
                onClick={viewData}
              >
                Register Yourselves!
              </button>
            </a>

           
          </div>
        </div>
      )}
      {showForm && <Question fid={fid} title={eventinfo.title} fields={formdata.fields} orderid={orderid} price={eventinfo.price} type={formdata.type}  onsubmit={onsubmit} />}
    </div>
  );
}

export default Form;
