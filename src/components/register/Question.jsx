import React, { useState,useContext } from "react";
import Text from "./Type/Text";
import Radio from "./Type/Radio";
import Email from "./Type/Email";
import Number from "./Type/Number";
import Dropdown from "./Type/Dropdown";
import AuthContext from "../../store/auth-context";

import axios from "axios";
// import S from "./Submitted";

function Question({ fields,title, type, price, fid,orderid }) {
  
  const [currentdata, setCurrentdata] = useState({
  });
  const [currentfield,setCurrentfield]=useState({
  })
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const authCtx = useContext(AuthContext);
  useState(()=>{
    const initialdata = fields.map((e) => {
      return { name: e.name, type: e.type, value: "" };
    });
    if(initialdata){
      setCurrentdata(initialdata)
    }
   
    setCurrentfield(initialdata[currentQuestion])
  },[])

  const onChange = (e) => {
   
    const value = e.target.value;
    if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }
    
    setCurrentfield({ ...currentfield, value: e.target.value });
    
  };

  const onformsubmit = async() => {
    if(currentQuestion + 1 == fields.length){
      currentdata[currentQuestion]=currentfield
    setCurrentdata(currentdata)
     }
    if (type == "Registration" && price > 0) {
      var options = {
        key: "rzp_live_4f8tfgwDLgiAZj", // Enter the Key ID generated from the Dashboard
        amount: `${price*100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "KIIT_ROBOTICS_SOCIETY",
        description: `${title}`,
        image: "https://krs.kiit.ac.in/images/krslogo.jpg",
        "order_id": `${orderid}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function  (response) {
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);
          try{
          const resp = await axios.post(`/api/registration/register/submition/${fid}`,{row:currentdata,sign:response.razorpay_signature,oid:response.razorpay_order_id,pid:response.razorpay_signature},{headers:{ "Authorization": `${authCtx.token}`}});
          const data=resp.data
          console.log(data)
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);
          }catch(e){
     console.log(e)
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        }, 
        theme: {
          color: "#EAB308",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
    } else {
        try{
          const resp = await axios.post(`/api/registration/register/submition/${fid}`,{row:currentdata,sign:""},{headers:{ "Authorization": `${authCtx.token}`}});
          const data=resp.data
          console.log(data)

        }catch(e){
   console.log(e)
        }
    }
  };


  function next() {

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < fields.length) {
      currentdata[currentQuestion]=currentfield
      setCurrentdata(currentdata)
      setCurrentQuestion(nextQuestion);
      setCurrentfield(currentdata[nextQuestion])
    }
  }

  function back() {
    console.log(currentdata)
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      
       if(currentQuestion + 1 == fields.length){
        currentdata[currentQuestion]=currentfield
      setCurrentdata(currentdata)
       }
      setCurrentQuestion(prevQuestion);
      setCurrentfield(currentdata[prevQuestion])
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <text className="text-2xl font-bold text-yellow-500">
            {currentQuestion + 1}
            <text className="text-yellow-500">.</text>
          </text>
        </div>

        <div className="ml-6">
          <text className="text-3xl font-bold text-white">
            {currentfield.name}
          </text>
        </div>
      </div>
      <div
        className="ml-10"
        style={{
          border: "none",
          borderBottom:
            currentfield.type == "radio"
              ? "none"
              : "2px solid white ",
          width: "90%",
          fontSize: "16px",
          padding: "12px 20px 12px 40px",
        }}
      >
          
        {currentfield.type == "text" && (

          <Text  initial={currentfield} name={currentfield.type} change={onChange} />
        )}
        {currentfield.type == "email" && (
          <Email initial={currentfield.value} name={currentfield.type} change={onChange} />
        )}
        {currentfield.type == "checkbox" && (
          <Radio
            name={currentfield.type}
            change={onChange}
            values={fields[currentQuestion].value}
            initial={currentfield.value}
          />
        )}
          {currentfield.type == "dropdown" && (
          <Dropdown
            name={currentfield.type}
            change={onChange}
            values={fields[currentQuestion].value}
            initial={currentfield.value}
          />
        )}
        {currentfield.type == "number" && (
          <Number initial={currentfield.value} name={currentfield.type} change={onChange} />
        )}
      </div>

      <div className="flex justify-center items-center m-10 ">
        <button
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2  "
          onClick={back}
        >
          Back
        </button>

        {currentQuestion + 1 == fields.length ? (
          <div>
            <button
              className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
              onClick={onformsubmit}
            >
              {type == "Registration" && price>0 ?"Pay":"Submit"}
            </button>
            {/* <text className="text-5xl text-white">SUBMITTED SUCCESSFULLY!!</text> */}
          </div>
        ) : (
          <button
            className="focus:outline-none  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
            onClick={next}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
