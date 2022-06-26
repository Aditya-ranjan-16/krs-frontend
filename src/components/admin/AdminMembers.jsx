import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PP from "../../public/pp.jpeg"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'
import Email from '../../public/email.png'

const memberCard = [
  {
    name: "Shashank Jaiswal",
    roll: "2005405",
    domain: "web-dev",
    designation: "coordinator",
    about: "qwerty jhava iu siu aiusgu asiug asg iaguhsn iuash iuags nwiujsg biu",
    year: "2022",
    img: PP,
    linkedin: "www.linkedin.com/123",
    email: "xyz@gmai",
    insta: "ins",
    github: "ys"
  },
  {
    name: "Jaiswal",
    roll: "200123",
    domain: "web-dev",
    designation: "admi",
    about: "qwerty",
    year: "2022",
    img: PP,
    linkedin: "a",
    email: "ds",
    insta: "ins",
    github: "ys"
  },
]


function AdminMembers() {
  const [members, setMembers] = useState(memberCard)  
  const [mem, setMem] = useState({name: "", roll: "", domain: "", designation: "", about: "", year: "", img: "", linkedin: "", email: "", insta: "", github: ""})

  //  add members
  const handleClick = (e)=>{
    e.preventDefault();
    setMem({name: "", roll: "", domain: "", designation: "", about: "", year: "", img: "", linkedin: "", email: "", insta: "", github: ""})
    setMembers(members.concat(mem))
  }
  const onChange = (e)=>{
    setMem({...mem, [e.target.name]: e.target.value})
  }
  console.log(mem)

  // deleting members
  const deleteMember = (roll) => {
    const newMembers = members.filter((member)=>{return member.roll!==roll})
      setMembers(newMembers)
      console.log(newMembers)
  }

  // editing members
  

  // modal state
  const [showModal, setShowModal] = useState(false)
  return (
      
    <div className="flex-1 my-12 mx-20 justify-center items-center">
          

            {/* form */}
            <div className='py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500'>
              <h1 className="p-2 text-3xl text-white">Add a member</h1>
              <div className='grid grid-cols-3'>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Name</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Name' type="text" name='name' value={mem.name} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Roll Number</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Roll no.' type="text" name='roll' value={mem.roll} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Domain</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Domain' type="text" name='domain' value={mem.domain} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Designation</h2>
                  <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" id="cars" name="designation" value={mem.designation} onChange={onChange}>
                    <option value="Member">Member</option>
                    <option value="Coordinator">Coordinator</option>
                    <option value="Assistant Coordinator">Assistant Coordinator</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Year</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Year' type="text" name='year' value={mem.year} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Image</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Image link' type="text" name='img' value={mem.img} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">About</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter About' type="text" name='about' value={mem.about} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Linkdin</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Linkedin link' type="text" name='linkedin' value={mem.linkedin} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Email</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter email link' type="text" name='email' value={mem.email} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Instagram</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter insta link' type="text" name='insta' value={mem.insta} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Github</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter github link' type="text" name='github' value={mem.github} onChange={onChange} />
                </div>
              </div>
              <button type="submit" onClick={handleClick} className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white">Add member</button>
            </div>


            <div className='w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {members.map((data) => {
            return(
              <div className='bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%] space-y-4 mx-10 my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={data.img} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>{data.name}</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>{data.designation}</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>"{data.about}"</p>
                    {/* <a className='text-yellow-500 text-center' href="">{data.email}</a> */}
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Email} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                  </div>
                  <div className="flex space-x-4">
                          <Link className="text-white" onClick={() => deleteMember(data.roll)} to=""><img className='w-6' src={Delete} alt="dlt" /></Link>
                          <Link className="text-white" onClick={() => setShowModal(true)} to=""><img className='w-6' src={Edit} alt="edit" /></Link>      
                  </div>
                </div>
              </div>
            )
          })}
          </div>

            {/* cards
            <div className='py-4'>
              <div className="grid grid-cols-3">

                {members.map(member => {
                  return (
                    <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                      <h2 className="">{member.name}</h2> 
                      <div className="flex justify-between">
                        <h3 className="text-sm">{member.roll}</h3>
                        <div className="flex space-x-2">
                          <Link className="" onClick={() => deleteMember(member.roll)} to=""><img src="" alt="dlt" /></Link>
                          <Link className="" onClick={() => setShowModal(true)} to=""><img src="" alt="edit" /></Link>      
                        </div>
                      </div>
                    </div>  
                  )
                  
                })}    
              </div>
            </div> */}

            {/* modal */}
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl text-white font-semibold">Edit member</h3>
                        <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                          <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className='grid grid-cols-3'>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Name</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter name' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Roll Number</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Roll no.' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Domain</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter domain' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Designation</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter designation' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Year</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Year' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Image</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter image' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">About</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter About' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Linkdin</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Linkedin link' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Email</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Email link' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Instagram</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Instageam link' type="text" />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Github</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Github link' type="text" />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>Close </button>
                        <button className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)} >Save Changes </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}



        </div>
  )
}

export default AdminMembers