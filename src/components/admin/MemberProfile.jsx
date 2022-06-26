import React, {useState} from 'react'
import { Link } from "react-router-dom";
import PP from "../../public/pp.jpeg"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'
import Email from '../../public/email.png'

function MemberProfile() {

    
  // modal state
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='flex-1 my-12 mx-20 flex'>
            <div className='p-4 w-1/3 flex flex-col items-center'>
                <img className='w-72 h-72 rounded-xl' src={PP} alt="" />
                <h1 className='text-yellow-500 text-center text-3xl font-bold pt-4 pb-1'>Shashank Jaiswal</h1>
                <h1 className='text-white text-2xl text-center'>2005405</h1>
            </div>
            <div className='p-4 w-2/3 grid grid-cols-2'>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>Year</h1>
                    <h2 className='text-white text-xl italic'>2020</h2><br />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>Designation</h1>
                    <h2 className='text-white text-xl italic'>Web Developer</h2><br />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>Domain</h1>
                    <h2 className='text-white text-xl italic'>Web Development</h2><br />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>About</h1>
                    <h2 className='text-white text-xl italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi ad necessitatibus ex eius. Corrupti ullam alias blanditiis fugit iste.</h2><br />
                </div>
                <div>
                   <h1 className='text-white text-2xl font-semibold underline'>Email</h1>
                    <h2 className='text-white text-xl italic'>shashank@gmail.com</h2><br /> 
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>LinkedIn</h1>
                    <h2 className='text-white text-xl italic'>www.sjlinkedin.com</h2><br />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>Instagram</h1>
                    <h2 className='text-white text-xl italic'>www.sjinsta.com</h2><br />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-semibold underline'>Github</h1>
                    <h2 className='text-white text-xl italic'>www.sjgithub.com</h2><br />
                </div>
                <div className="flex space-x-4 col-span-2 justify-end">
                    <Link className="text-white" onClick={() => setShowModal(true)} to=""><img className='w-6' src={Edit} alt="edit" /></Link>      
                </div>
            </div>
            
            

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

export default MemberProfile