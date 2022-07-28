import React, { useState, useEffect, useRef, useContext } from "react";
import cross from "../../public/cross.png";
import Questions from "./Questions";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'
import { Link } from "react-router-dom";

// import Questions from './Questions'

function Forms(props) {
  const del = useRef(null);
  const authCtx = useContext(AuthContext);
  const [eventlist, setEventlist] = useState([]);
  const [regexist,setRegexist]=useState(false)
  useEffect(() => {
    console.log("aaya");
    async function makereq() {
      try {
        const resp = await axios.get("/api/events/list");
        const data = resp.data;

        setEventlist(data.list);
      } catch (e) {
        console.log(e);
      }
    }
    makereq();
  }, []);
  const formdata = [
    {
      event: "pradarshana",
      typeofform: "registration",
      heading: "pra",
      subtitle: "darshana",
      instructions: "1.0",
    },
  ];

  const [forms, setForms] = useState(formdata);
  const [showFInalData, setshowFInalData] = useState([]);

  const [formData, setformData] = useState({
    event: "",
    typeofform: "",
    heading: "",
    subtitle: "",
    instructions: "",
    Namevalue: "",
    Rollvalue: "",
    Emailvalue: "",
  });
  const [addFeild, setAddFeild] = useState([]);
  const [curFeild, setCurFeild] = useState({ name: "", type: "", value: "" });
  const [show, set] = useState(false);
  const [showE, setE] = useState("");
  const [showE2, setE2] = useState("");

  const createForm = () => {
    const {
      event,
      typeofform,
      heading,
      subtitle,
      instructions,
      Namevalue,
      Rollvalue,
      Emailvalue,
    } = formData;
    if (
      event !== "" &&
      typeofform !== "" &&
      heading !== "" &&
      subtitle !== "" &&
      instructions !== ""
    ) {
      var final = {
        event,
        typeofform,
        heading,
        subtitle,
        instructions,
        fields: [
          {
            name: "Name",
            type: "text",
            value: Namevalue,
          },
          {
            name: "Roll Number",
            type: "number",
            value: Rollvalue,
          },
          {
            name: "Email",
            type: "email",
            value: Emailvalue,
          },
        ],
      };

      final.fields = final.fields.concat(addFeild);
      setshowFInalData(showFInalData.concat(final));
      setformData({
        event: "",
        typeofform: "",
        heading: "",
        subtitle: "",
        instructions: "",
        Namevalue: "",
        Rollvalue: "",
        Emailvalue: "",
      });
      setAddFeild([]);
      setE("");
    } else {
      setE("Please fill all the fields");
    }
  };

  const onChange = (e) => {
    
    const value = e.target.value;
   
    if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }
    if(e.target.name=="event"){
      
      async function makereq1(){
      
        try{
          const resp = await axios.get(`/api/events/checkform/${value}`);
          const data = resp.data;
          if(data.exist==true){setRegexist(true)}
          else{setRegexist(false)}
 
        }catch(e){
          console.log(e)
        }
      }
      makereq1()
     }

    setformData({ ...formData, [e.target.name]: e.target.value });
    setformM({ ...formData, [e.target.name]: e.target.value })
  };

 

  const onChange2 = (e) => {
    setCurFeild({ ...curFeild, [e.target.name]: e.target.value });
  };

  

  const addFeildCheck = (e) => {
    if (show === true) {
      del.current.style.display = "flex";
      set(false);
      return;
    }

    const { name, type, value } = curFeild;

    var arr = { name, type, value };
    if (name !== "" && type !== "") {
      setAddFeild(addFeild.concat(arr));
      setCurFeild({ name: "", type: "", value: "" });
      setE2("");
    } else {
      setE2("Please fill the name and type field");
      
    }
  };

  const currDelete = () => {
    set(true);
    del.current.style.display = "none";
  };

  const removeFeild = (name, type) => {
    setAddFeild(addFeild.filter((el) => el.type !== type || el.name !== name));
  };

  const [showForm, setshowForm] = useState(true);

  const viewData = () => setshowForm(true);


  // delete form
  const deleteForm = (event) => {
    const newFinalData = formdata.filter((data) => { return data.event !== event })
    setformData(newFinalData)
  }
  
  
  const [showModal, setShowModal] = useState({show:false,index:null});
  const [formM, setformM] = useState({event: "", typeofform: "", heading: "", subtitle: "", instructions: ""})
  // editing form
  const updateCard = (key) => {
    setformM({event: showFInalData[key].event, typeofform: showFInalData[key].typeofform, heading: showFInalData[key].heading, subtitle: showFInalData[key].subtitle, instructions: showFInalData[key].instructions})
    
    setShowModal({show:true,index:key})
  }
  // add changes
  const editForms = () => {
    console.log(formM.event, formM.subtitle)
    // showFInalData[showModal.index]={event:formM.event,typeofform:formM.typeofform,heading:formM.heading,subtitle:formM.subtitle,instructions:formM.instructions}
    // setshowFInalData(showFInalData)
    setformM({event: "", typeofform: "", heading: "", subtitle: "", instructions: ""})
    setShowModal({show:false,index:null})
  }
  // modal
  const closeModal = () => {
    setformM({event: "", typeofform: "", heading: "", subtitle: "", instructions: ""})
    setShowModal({show:false,index:null})
  }

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Select Event</h2>
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="event"
              onChange={onChange}
            >
              <option selected disabled hidden>
                Select
              </option>
              {eventlist.map((e) => (
                <option value={e.id}>{e.title}</option>
              ))}
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Type of Form</h2>
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="typeofform"
              onChange={onChange}
            >
              <option selected disabled hidden>
                Select
              </option>
              {regexist==false && <option value="Registration">Registration</option>}
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter heading"
              type="text"
              name="heading"
              value={formData.heading}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter subtitle"
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter instructions"
              type="text"
              name="instructions"
              value={formData.instructions}
              onChange={onChange}
            />
          </div>
        </div>

        <h1 className="p-2 text-2xl text-white">Add Fields</h1>
        <div className="px-5">
          <div className="px-5 grid grid-cols-4 gap-4 py-2">
            <label className="text-white text-xl text-center" htmlFor="">
              Name
            </label>
            <label className="text-white text-xl text-center" htmlFor="">
              Type
            </label>
            <label className="text-white text-xl text-center" htmlFor="">
              Value
            </label>
          </div>

          {/* Name Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="name"
              value="Name"
            />
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="type"
              value="text"
            >
              <option value="text" selected>
                text
              </option>
            </select>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="Namevalue"
              onChange={onChange}
            />
          </div>

          {/* Roll Number Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="name"
              value="Roll Number"
            />
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="type"
              value="text"
            >
              <option value="number" selected>
                number
              </option>
            </select>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="Rollvalue"
              onChange={onChange}
            />
          </div>

          {/* Email Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="name"
              value="Email"
            />
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="type"
              value="text"
            >
              <option value="email" selected>
                email
              </option>
            </select>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="Emailvalue"
              onChange={onChange}
            />
          </div>

          {/* Add Feilds With Values */}
          {addFeild ? (
            <div>
              {addFeild.map((value, key) => {
                return (
                  <div key={key} className="px-5 grid grid-cols-3 gap-4 py-2">
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      type="text"
                      value={value.name}
                    />
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      type="text"
                      value={value.type}
                    />
                    <div className="flex">
                      <input
                        className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                        type="text"
                        value={value.value}
                      />
                      <button className="text-xl  px-2 mx-1 rounded-lg text-white">
                        <img
                          className="w-6"
                          src={cross}
                          alt="remove"
                          onClick={() => removeFeild(value.name, value.type)}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {/* For More Feilds */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2" ref={del}>
            <input
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              type="text"
              name="name"
              value={curFeild.name}
              onChange={onChange2}
            />
            <select
              className="text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="type"
              onChange={onChange2}
            >
              <option value="select" selected disabled hidden>
                Select
              </option>
              <option name="type" value="text">
                text
              </option>
              <option name="type" value="number">
                number
              </option>
              <option name="type" value="email">
                email
              </option>
            </select>
            <div className="flex">
              <input
                className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                type="text"
                name="value"
                value={curFeild.value}
                onChange={onChange2}
              />
              {/* <button className="text-xl   mx-3 rounded-lg text-white hover:brightness-200"><img className='w-6' src={tick} alt="remove" onClick={addFieldList} /></button> */}
              <button className="text-xl   mx-3 rounded-lg text-white hover:brightness-75">
                <img
                  className="w-6"
                  src={cross}
                  alt="remove"
                  onClick={currDelete}
                />
              </button>
            </div>
          </div>

          {/* For More Feilds */}
          {/* {fieldList.map((list, index) => {
            return (
              <div key={index} className="px-5 grid grid-cols-3 gap-4 py-2">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" />
                <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type">
                  <option value="select" selected disabled hidden>Select</option>
                  <option name='type' value="text">text</option>
                  <option name='type' value="number">number</option>
                  <option name='type' value="email">email</option>
                </select>
                <div className='flex'>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="value" />
                  <button className="text-xl  px-2 mx-1 rounded-lg text-white"><img className='w-6' src={cross} alt="remove" /></button>
                </div>
              </div>
            )
          })} */}
        </div>
        <br />
        {showE2 ? <p className="alertText">{showE2}</p> : ""}
        <button
          className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white"
          onClick={addFeildCheck}
        >
          + Add field
        </button>
        <br />
        {showE ? <p className="alertText">{showE}</p> : ""}
        <button
          type="submit"
          className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white"
          onClick={createForm}
        >
          Create Form
        </button>
      </div>

      {/* {forms.map((data) => {
        return (
          <div className="text-white border-2"> */}
      {/* <form action=""> */}
      {/* <h1>{data.event}</h1>
              <h1>{data.heading}</h1>
              <h1>{data.subtitle}</h1>
              <h1>{data.instructions}</h1> */}
      {/* {fieldList.map((field) => {
                return (
                  <div className="text-white">
                    <div>
                      <label htmlFor="">Name</label>
                      <input className='text-black' type="text" placeholder={field.value} />
                    </div>
                    <div></div>
                    <div></div>
                    <label htmlFor="">{field.name}</label>
                    <input className='text-black' type={field.type} name={field.name} placeholder={field.value} />
                  </div>
                )
              })} */}
      {/* </form> */}
      {/* </div>
        )
      })} */}

      {showFInalData ? (
        <div>
          {showFInalData.map((value, key) => {
            return (
              <div
                key={key}
                className="flex flex-row-reverse border-2 border-yellow-500 px- my-5 rounded-xl"
              >
                <div className="w-1/3 border-l border-yellow-500 flex flex-col items-center">
                  <h1 className="p-2 text-3x text-center mt-5 text-amber-300">
                    <b>{eventlist.map((e)=>{
                      if(e.id==value.event){
                        return e.title
                      }
                    })}</b>
                  </h1>
                  <div className="text-white py-3">
                    <h1 className="text-xl text-center my-2">
                      {value.heading}
                    </h1>
                    <h1 className="text-xl text-center my-2">
                      {value.subtitle}
                    </h1>
                    <h1 className="text-xl text-white text-center my-2">
                      {value.instructions}
                    </h1>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-white" onClick={() => deleteForm(value.event)} to=""><img className='w-6' src={Delete} alt="dlt" /></div>
                    <div className="text-white" onClick={() => updateCard(key)} to=""><img className='w-6' src={Edit} alt="edit" /></div>
                  </div>

                  {/* {value.fields ?
                  <div>
                    {value.fields.map((val, key) => {
                      return (
                        <div key={key} className="my-5 px-10">
                          <label className='text-xl text-center text-white' htmlFor="">{val.name}</label>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded mt-2" type={val.type} placeholder={val.value} />
                        </div>
                      )
                    })}
                  </div> : ""} */}
                </div>

                {showForm && (
                  <div className="w-2/3" id="" key={key}>
                    {/* <div>
                        <div key={key} className="my-5 px-10">
                          <label className='text-xl text-center text-white' htmlFor="">{value.fields[currentQuestion].name}</label>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded mt-2" type={value.fields[currentQuestion].type} placeholder={value.fields[currentQuestion].value} />
                        </div>
                      
                    
                  </div> */}

                    <Questions
                      len={showFInalData[0].fields.length}
                      fields={showFInalData[0].fields}
                    />
                    {/* buttons
                  <div className="flex justify-center items-center m-10 ">
                  <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2  "
                    onClick={back} >
                    Back
                  </button> */}

                    {/* {currentQuestion + 1 == value.fields.length ? (
                    <div>
                      <button className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                        onClick={onsubmit} >
                        Submit
                      </button> */}
                    {/* <text className="text-5xl text-white">SUBMITTED SUCCESSFULLY!!</text> */}
                    {/* </div>
                  ) : (
                    <button
                      className="focus:outline-none  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                      onClick={next} >
                      Next
                    </button>
                  )}
                  </div> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      
            {/* modal */}
            {showModal.show ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl text-white font-semibold">Edit form</h3>
                        <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                          <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className='grid grid-cols-3'>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Event</h2>
                          <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="event" value={formM.event} onChange={onChange} >
                            <option selected disabled hidden> Select </option>
                            {eventlist.map((e) => (
                              <option value={e.id}>{e.title}</option>
                            ))}
                          </select>
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Type</h2>
                          <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="typeofform" value={formM.typeofform} onChange={onChange} >
                            <option selected disabled hidden> Select </option>
                            {regexist==false && <option value="Registration">Registration</option>}
                            <option value="Normal">Normal</option>
                          </select>
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
                          <input
                            className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                            placeholder="Enter heading"
                            type="text"
                            name="heading"
                            value={formM.heading}
                            onChange={onChange}
                          />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
                          <input
                            className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                            placeholder="Enter subtitle"
                            type="text"
                            name="subtitle"
                            value={formM.subtitle}
                            onChange={onChange}
                          />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
                          <input
                            className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                            placeholder="Enter instructions"
                            type="text"
                            name="instructions"
                            value={formM.instructions}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={closeModal}>Close </button>
                        <button className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={editForms} >Save Changes </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
    </div>
  );
}

export default Forms;
