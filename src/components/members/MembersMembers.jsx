import React from 'react'
import PP from "../../public/pp.jpeg"
import Twitter from "../../public/twitter.png"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"



const MembersData = [
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
  },
  {
    name: "Shashank Jaiswal",
    about: "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com"
  }  
];


function MembersMembers(props) {
    const vis = props.memVisible.visibility
    console.log(vis)
  return (
    <div className={`w-full py-10 px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${vis} justify-items-center`}>
          {MembersData.map((data) => {
            return(
              <div
                className="bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%]  mx-10 my-5 flex justify-center rounded-3xl"
                style={{ position: "relative", alignItems: "center" }}
              >
                <div
                  className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                  style={{ position: "absolute", top: "0" }}
                ></div>
                <div
                  className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                  style={{ zIndex: "9" }}
                >
                  <div className="">
                    <img
                      className="w-40 h-40 rounded-3xl"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-5 h-full items-center mx-5">
                    <div className="space-y-1 flex flex-col items-center">
                      <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">
                        {data.name}
                      </h1>
                      <h2 className="text-white font-semibold text-base sm:text-lg text-center">
                        Coordingator
                      </h2>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-white text-justify text-sm xl:text-base">
                        "{data.about}"
                      </p>
                      {/* <a className='text-yellow-500 text-center' href="">{data.email}</a> */}
                    </div>
                    <div className="flex space-x-3">
                      <a className="" href="">
                        <img className="w-8" src={Twitter} alt="" />
                      </a>
                      <a className="" href="">
                        <img className="w-8" src={Insta} alt="" />
                      </a>
                      <a className="" href="">
                        <img className="w-8" src={Git} alt="" />
                      </a>
                      <a className="" href="">
                        <img className="w-8" src={Linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                  style={{ position: "absolute", bottom: "0" }}
                ></div>
              </div>
            )
          })}
          
        </div>
  )
}

export default MembersMembers