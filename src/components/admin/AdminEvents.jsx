import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'
import qr from '../../public/qr.png'
import qrbg from '../../public/qrbg.jpg'
import EventSlider from '../events/EventSlider'
import axios from "axios";
import {Html5Qrcode} from "html5-qrcode"
import AuthContext from '../../store/auth-context';
import loading from '../../public/loading.svg'

import { useEffect } from "react";


let eventCard = [];

function AdminEvents({level}) {
  const [events, setEvents] = useState([]);
  const [eve, setEve] = useState({ _id:"",price:0,title: "",subtitle:"", date: "", venue: "", status: "", mode: "", teamcreation: "",teamsize:0, img1: "", img2: "", img3: "", description: "", sheetId: "" });
  const [showModal, setShowModal] = useState({ show: false, index: null });
  const [show, set] = useState("");
  const authCtx = useContext(AuthContext);
  const [qrdata, setQrData] = useState({code:null,info:""});
  const [loadin,setLoadin]=useState(false)
  const selectref=useRef()
  const selectref1=useRef()
  const selectref2=useRef()

    // qr modal state
    const [showqrModal, setShowQrModal] = useState({status:false,sid:"",fid:""});

   

  useEffect(()=>{
   async function makereq (){
    try{
      const resp = await axios.get("/api/events/");
      const data=resp.data;
      console.log(data) 
      setEvents(events.concat(data));
    }catch(e){
    console.log(e)
    }
  
   } 
   makereq();
  
  },[])
   //detectqr
   const detectqr=async(code,sid,fid)=>{
    
    try{
      setLoadin(true)
      const resp = await axios.post(`/api/registration/register/verify/`,{code:code,sheetid:sid,formid:fid,type:"detect"},{headers:{ "Authorization": `${authCtx.token}`}});
      const data=resp.data
    
      if(data.success==true){
        setQrData({code:code,info:data.info})
        setLoadin(false)
      }
     
    }catch(e){
      console.log(e)
    }
   
  }
  //initscan
 
  const initscan=(sid,fid)=>{
    console.log(showqrModal)
    const html5QrCode = new Html5Qrcode("qrreader");
    const qrCodeSuccessCallback = async(decodedText, decodedResult) => {
     detectqr(decodedText,sid,fid)
     html5QrCode.stop().then((ignore) => {
      console.log(ignore)
    }).catch((err) => {
      console.log(err)
    });
  };
  const config = { fps: 10, qrbox: { width: 1550, height: 1550 } };
  
  // If you want to prefer front camera
  html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
  
  }

 
  //verify qr
  const verifyqr=async(code)=>{
    try{
      const resp = await axios.post(`/api/registration/register/verify/`,{code:code,sheetid:showqrModal.sid,formid:showqrModal.fid,type:"verify"},{headers:{ "Authorization": `${authCtx.token}`}});
      const data=resp.data
      if(data.success==true){
        setQrData({code:code,info:data.info})
      }
     
    }catch(e){
      console.log(e)
    }
   
  }
  //openscan
  const openscan=(sid,fid)=>{
    console.log(sid+"----"+fid)
    setTimeout(()=>{initscan(sid,fid)}, 100);
    setShowQrModal({status:true,sid:sid,fid:fid})
    
    
  }
  //  add events
  const handleClick =async (e) => {
    e.preventDefault();
    const { title, date, venue, status, mode, teamcreation, img1, img2, img3, description, sheetId } = eve;
    if (title !== "" && date !== "" && venue !== "" && status !== "" && mode !== "" && teamcreation !== "" && img1 !== "" && img2 !== "" && img3 !== "" && description !== "" && sheetId !== "") {
      
      try{
        const resp = await axios.post("/api/events/addEvent", eve,{headers:{ "Authorization": `${authCtx.token}`}});
        const id=resp.data.data
        eve._id=id;
        setEve(eve);
        setEvents({...events,eve});
      }catch(err){
        console.log(err)
      }
      selectref.current.value="Select"
      selectref1.current.value="Select"
      selectref2.current.value="Select"
     setEve({ title: "",price:0,subtitle:"",teamsize:null, date: "", venue: "", status: "", mode: "", teamcreation:"Select", img1: "", img2: "", img3: "", description: "", sheetId: "" });
    set("");
    } else {
      set("Please fill all the fields");
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
    
      console.log(e.target.value)
    
    setEve({ ...eve, [e.target.name]: e.target.value });
  };

  // deleting events
  const deleteEvent = async (id) => {

    try{
      const newEvents = events.filter((event) => {
      
        return event._id !== id;
      });
      setEvents(newEvents);
      const resp = await axios.delete(`/api/events/deleteEvent/${id}`,{headers:{ "Authorization": `${authCtx.token}`}});
       
  
    }
      catch(e){
        console.log(e);
      }
  
  
  };

  //editing events
  const updateCard = (i) => {
    setEve({ _id:events[i]._id, price:events[i].price, subtitle:events[i].subtitle,title: events[i].title, date: events[i].date, venue: events[i].venue, status: events[i].status, mode: events[i].mode, teamcreation: events[i].teamcreation,teamsize:events[i].teamsize, img1: events[i].img1, img2: events[i].img2, img3: events[i].img3, description: events[i].description, sheetId: events[i].sheetId });
    setShowModal({ show: true, index: i })
  }

  const editEvents = async() => {
   
    const updatedcard={ _id:eve._id,subtitle:eve.subtitle,title: eve.title,price:eve.price, date: eve.date, venue: eve.venue, status: eve.status, mode: eve.mode, teamcreation: eve.teamcreation,teamsize:eve.teamsize, img1: eve.img1, img2: eve.img2, img3: eve.img3, description: eve.description}
    
    events[showModal.index] = updatedcard
  
 
    try{
      const resp = await axios.patch(`/api/events/editEvent/${eve._id}`,updatedcard,{headers:{ "Authorization": `${authCtx.token}`}});
      setEvents(events)
    }
    catch(e){
      console.log(e);
    }
    setEve({ title: "", date: "", venue: "", status: "",price:0,teamsize:0, mode: "", teamcreation: "", img1: "", img2: "", img3: "", description: "", sheetId: "" });
    setShowModal({ show: false, index: null })

  }

  // modal state
  const closeModal = () => {
    setEve({ title: "", date: "", venue: "", status: "",price:0,teamsize:0, mode: "", teamcreation: "", img1: "", img2: "", img3: "", description: "", sheetId: "" });
    setShowModal({ show: false, index: null })
  }

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
   
      {/* form */}
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Add an event </h1>
       
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Name</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event name" type="text" name='title' value={eve.title} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter subtitle" type="text" name='subtitle' value={eve.subtitle} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Date</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event date" type="date" name='date' value={eve.date} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Venue</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event venue" type="text" name='venue' value={eve.venue} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Status</h2>
            <select ref={selectref} className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="status" id="" onChange={onChange}>
              <option value="Select" selected disabled hidden>Select</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Registrations Open">Registrations Open</option>
              <option value="Registrations Closed">Registrations Closed</option>
              <option value="Over">Over</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Mode</h2>
            <select ref={selectref1} className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="mode" id="" onChange={onChange}>
              <option value="Select" selected disabled hidden>Select</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">price</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded " style={{appearance:"none"}} placeholder="Enter price" type="number" name='price' value={eve.price} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Team Creation</h2>
            <select ref={selectref2} className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="teamcreation" id="" onChange={onChange}>
              <option value="Select" selected disabled hidden>Select</option>
              <option value="Allowed">Allowed</option>
              <option value="Not allowed">Not allowed</option>
            </select>
          </div>
         {eve.teamcreation=="Allowed" &&   <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Team Size</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter team size" type="text" name='teamsize' value={eve.teamsize} onChange={onChange} />
          </div>}
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Image-1</h2>
            <div className="flex w-full space-x-4">
              <div className="w-full flex items-center">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter image link" type="text" name='img1' value={eve.img1} onChange={onChange} />
              </div>
              <img className="w-16 rounded text-white text-sm" src={eve.img1} alt="image not found" />
            </div>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Image-2</h2>
            <div className="flex w-full space-x-4">
              <div className="w-full flex items-center">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter image link" type="text" name='img2' value={eve.img2} onChange={onChange} />
              </div>
              <img className="w-16 rounded text-white text-sm" src={eve.img2} alt="image not found" />
            </div>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Image-3</h2>
            <div className="flex w-full space-x-4">
              <div className="w-full flex items-center">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter image link" type="text" name='img3' value={eve.img3} onChange={onChange} />
              </div>
              <img className="w-16 rounded text-white text-sm" src={eve.img3} alt="image not found" />
            </div>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Sheet ID</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event Sheet ID" type="text" name='sheetId' value={eve.sheetId} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Description</h2>
            <textarea className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter description of the event..." name="description" value={eve.description} onChange={onChange} id="" cols="30" rows="5"></textarea>
          </div>

        </div>
        <br />
        {show ? <p className="alertText">{show}</p> : ""}
        <button type="submit" onClick={handleClick} className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white" > Add event </button>
      </div>

      {/* card */}
      {events.map((eventsData, i) => {
        console.log(events)
        return (
          <div key={i} className='flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between'>
            <div className='text-white order-2 md:order-1 w-full md:w-2/3 py-10 px-10 flex flex-col justify-between'>
              <div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-8 text-center md:text-left text-yellow-500'>{eventsData.title}</h1>
                <h6 className='text-1xl sm:text-1xl  md:text-1xl xl:text-1xl font-light pb-8 text-center md:text-left text-yellow-500'><i>{eventsData.date} <br />{eventsData.venue}</i></h6>
                <p className='text-2x1 font-thin sm:text-xl text-justify'>{eventsData.description}</p><br />
              </div>
              <div className="flex space-x-4 pt-4">
                <div className="text-white" onClick={() => deleteEvent(eventsData._id)} ><img className='w-6' src={Delete} alt="dlt" /></div>
                <div className="text-white" onClick={() => updateCard(i)} ><img className='w-6' src={Edit} alt="edit" /></div>
                <div className="text-white" onClick={() => {openscan(eventsData.sheetid,eventsData.registrationformid)}} ><img className='w-6' src={qr} alt="qr" /></div>
              </div>
            </div>
            <div className='w-[350px] bg-white order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2 event_slider_body '>
              <EventSlider thumb={[eventsData.img1,eventsData.img2,eventsData.img3]} key={i} />
            </div>
          </div>
        )
      })}



      {/* modal */}
      {showModal.show ? (
        <>
          <div key={showModal.index} className="justify-center border-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mt-52 mx-auto w-1/2">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Edit event
                  </h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={closeModal}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="grid grid-cols-2">
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Name</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter name"
                      type="text"
                      name='title' value={eve.title} onChange={onChange}
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter name"
                      type="text"
                      name='subtitle' value={eve.subtitle} onChange={onChange}
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Date</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter date"
                      type="date"
                      name='date' value={eve.date} onChange={onChange}
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Venue</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter venue"
                      type="text"
                      name='venue' value={eve.venue} onChange={onChange}
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Status</h2>
                    <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="status" id="">
                    {eve.status=="Select"? <option selected disabled hidden>Select</option>: <option disabled hidden>Select</option>}
                    {eve.status=="Upcoming"? <option value={eve.status} onChange={onChange} selected>Upcoming</option>:<option value={eve.status} onChange={onChange}>Upcoming</option>}
                    {eve.status=="Registrations Open"? <option value={eve.status} onChange={onChange} selected>Registrations Open</option>:<option value={eve.status} onChange={onChange}>Registrations Open</option>}
                    {eve.status=="Registrations Open"? <option value={eve.status} onChange={onChange} selected>Registrations Closed</option>:<option value={eve.status} onChange={onChange}>Registrations Closed</option>}
                    {eve.status=="Over"? <option value={eve.status} onChange={onChange} selected>Over</option>:<option value={eve.status} onChange={onChange}>Over</option>}
                  
      
                     
                    </select>
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Mode</h2>
                    <select 
                    
                     className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="mode" id="">
                      <option  disabled hidden>Select</option>
                      {eve.mode=="Select"?<option selected  disabled hidden>Select</option>:<option  disabled hidden>Select</option> }
                      {eve.mode=="Offline"? <option value={eve.mode} onChange={onChange} selected>Offline</option>: <option value={eve.mode} onChange={onChange}>Offline</option>}
                      {eve.mode=="Online"? <option value={eve.mode} onChange={onChange} selected>Online</option>:<option value={eve.mode} onChange={onChange}>Online</option>}
                      {eve.mode=="Hybrid"?  <option value={eve.mode} onChange={onChange} selected>Hybrid</option>: <option value={eve.mode} onChange={onChange}>Hybrid</option>}                                      
                      </select>
                  </div>
                  <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">price</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter price" type="number" name='price' value={eve.price} onChange={onChange} />
          </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Team Creation</h2>
                    <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="teamcreation" id="">
                    {eve.teamcreation=="Select"? <option selected dsabled hidden>Select</option>: <option dsabled hidden>Select</option>}
                    {eve.teamcreation=="Allowed"? <option value={eve.teamcreation} onChange={onChange} selected>Allowed</option>:<option value={eve.teamcreation} onChange={onChange}>Allowed</option>}
                    {eve.teamcreation=="Not allowed"? <option value={eve.teamcreation} onChange={onChange} selected>Not allowed</option>:<option value={eve.teamcreation} onChange={onChange}>Not allowed</option>}
                     
                     
                      
                    </select>
                  </div>
                  {eve.teamcreation=="Allowed" &&   <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Team Size</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter team size" type="text" name='teamsize' value={eve.teamsize} onChange={onChange} />
          </div>}
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Image-1</h2>
                    <div className="flex">
                      <input
                        className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                        placeholder="Enter image"
                        type="text"
                        name='img1' value={eve.img1} onChange={onChange}
                      />
                      <div className="px-[2%] flex items-center">
                        <img className="w-16 rounded text-white text-sm" src={eve.img1} alt="image not found" />
                      </div>
                    </div>
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Image-2</h2>
                    <div className="flex">
                      <input
                        className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                        placeholder="Enter image"
                        type="text"
                        name='img2' value={eve.img2} onChange={onChange}
                      />
                      <div className="px-[2%] flex items-center">
                        <img className="w-12 rounded text-white text-sm" src={eve.img2} alt="image not found" />
                      </div>
                    </div>
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Image-3</h2>
                    <div className="flex">
                      <input
                        className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                        placeholder="Enter image"
                        type="text"
                        name='img3' value={eve.img3} onChange={onChange}
                      />
                      <div className="px-[2%] flex items-center">
                        <img className="w-12 rounded text-white text-sm" src={eve.img3} alt="image not found" />
                      </div>
                    </div>
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Sheet ID</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter SheetID"
                      type="text"
                      name='sheetId' value={eve.sheetId} onChange={onChange}
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Description</h2>
                    <textarea className="text-base w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter description of the event..." name="description" value={eve.description} onChange={onChange} id="" cols="30" rows="3"></textarea>
                  </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={closeModal}>Close</button>
                  <button className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={editEvents}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* qr modal */}
      {showqrModal.status==true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    QR Scan
                  </h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => {setShowQrModal({status:false,sid:"",fid:""});setQrData({code:null,info:{}})}}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex-col justify-center px-16 py-2">
                 {(showqrModal.status==true && qrdata.code==null && loadin==false)? <div id="qrreader" className="h-52 w-52">g</div>:null}
      {qrdata.code!=null && <center><p style={{color:"white"}}><span className="text-[#EAB308]">{qrdata.code }</span> <br/> {qrdata.info.name} - {qrdata.info.roll}<br/> {qrdata.info.email} </p><br/>
      {qrdata.info.verification=="Verified" && <span style={{color:"green"}}>Verified</span>}
      {qrdata.info.verification=="Not Verified" && <span style={{color:"red",marginBottom:"12px"}}>Not Verified</span>}<br/>
      {qrdata.info.verification=="Not Verified" &&  <button onClick={()=>verifyqr(qrdata.code)} className="text-white bg-green-600 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >Verify</button>}
      
      <button></button>
      </center> }
      

     {loadin && <img src={loading} className="h-10 w-10" alt='mySvgImage' />} 
              
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => {setShowQrModal({status:false,sid:"",fid:""});setQrData({code:null,info:{}})}}>Close</button>
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

export default AdminEvents;
