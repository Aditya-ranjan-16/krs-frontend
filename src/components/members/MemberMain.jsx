import React, { useState } from 'react'
import PP from "../../public/pp.jpeg"
import Twitter from "../../public/twitter.png"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"
import MembersMembers from './MembersMembers'
import MembersAlumni from './MembersAlumni'
import BgImg from "../../public/memberspage.jpg"


const CoordinatorsData = [
  {
    name: "Shashank Jaiswal",
    about: "lorhbe wiueg iueg ike iuekg ikuge kieh kyeh iueiyjrh 8ejyrfijy fcyhf8cjedy f8 fhoiy f8ydhf  um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  },
  {
    name: "Shashank Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  },
  {
    name: "Shashank Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  }  
];



function MemberMain() {

  const [memVis, setmemVis] = useState({visibility: "block", border: "2"})
  const [aluVis, setaluVis] = useState({visibility: "hidden", border: "0"})

  const handleOnMembers = () => {
    setmemVis({visibility: "block", border: "2"});
    setaluVis({visibility: "hidden", border: "0"});
  }
  const handleOnAlumni = () => {
    setmemVis({visibility: "hidden", border: "0"});
    setaluVis({visibility: "block", border: "2"});
  }

  return ( 
    <div className='bg-black bg-cover bg-bottom bg-fixed' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgImg})`}}>
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold pt-6 px-10 text-yellow-500'>Coordinators</h1>
        <div className='w-full py-10 px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {CoordinatorsData.map((data) => {
            return(
              <div className='glass_effect_card w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%] space-y-4 mx-10 my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={data.img} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>{data.name}</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>"{data.about}"</p>
                    {/* <a className='text-yellow-500 text-center' href="">{data.email}</a> */}
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                    
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>

        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold pt-6 px-10 text-yellow-500">Assistant Coordinators</h1>
        <div className='w-full py-10 px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {CoordinatorsData.map((data) => {
            return(
              <div className='bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%] space-y-4 mx-10 my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={data.img} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>{data.name}</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>"{data.about}"</p>
                    {/* <a className='text-yellow-500 text-center' href="">{data.email}</a> */}
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                    
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
        <div className='flex justify-center w-[80%]'>
          <button className='w-full' onClick={handleOnMembers}>
            <h1 className={`text-center text-3xl sm:text-5xl md:text-6xl  border-${memVis.border} border-yellow-500 font-bold mt-6 text-yellow-500`}>Members</h1>
          </button>
          <button className='w-full' onClick={handleOnAlumni}>
            <h1 className={`text-center text-3xl sm:text-5xl md:text-6xl  border-${aluVis.border} border-yellow-500 font-bold mt-6 text-yellow-500`}>Alumni</h1>
          </button>
        </div>
        <hr className='w-[80%] border-[1px] border-yellow-500 bg-yellow-500' />
        
        

        <MembersMembers memVisible={memVis}/>
        <MembersAlumni aluVisible={aluVis} />
      </div>
    </div>
  )
}

export default MemberMain