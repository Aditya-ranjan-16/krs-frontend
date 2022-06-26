import React from 'react'
import PP from "../../public/pp.jpeg"
import Twitter from "../../public/twitter.png"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"


const CoordinatorsData = [
  {
    name: "Alumni Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  },
  {
    name: "Alumni Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  },
  {
    name: "Alumni Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  },
  
];


function MembersAlumni(props) {
    const visi = props.aluVisible.visibility

  return (
    <div className={`w-full py-10 grid px-[5%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${visi} justify-items-center`}>
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
  )
}

export default MembersAlumni