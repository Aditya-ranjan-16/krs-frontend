import React from "react";
import PP from "../../public/pp.jpeg";
import AB1 from "../../public/ab1.jpg";
import Twitter from "../../public/twitter.png";
import Insta from "../../public/instagram.png";
import Git from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import Fac from "../../public/facult.jpg";
import { useLayoutEffect,useRef } from "react";
function HomeAbout() {
  const aboutRef = useRef();
  const aboutCardRef = [useRef(0),useRef(1),useRef(2),useRef(3),useRef(4)];
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollAbout);

    return () => {
      window.removeEventListener("scroll", onScrollAbout);

  }
  }, []);

  const onScrollAbout = () => {
    const topPos = aboutRef.current.getBoundingClientRect().top;
    const scrollPos = window.innerHeight;
   
    if (topPos< scrollPos-100 && topPos>0) {
          aboutRef.current.style.opacity = 1;
           aboutRef.current.classList.add("fade-animation");
              
    }
for(var i=0;i<5;i++){
  const topPoscard = aboutCardRef[i].current.getBoundingClientRect().top;
  const scrollPoscard = window.innerHeight;
  if (topPoscard< scrollPoscard-100 && topPoscard>0) {
    aboutCardRef[i].current.style.opacity = 1;
   
      aboutCardRef[i].current.classList.add("fade-animation");
   
        
      }
}

  }


  return (
    <div className=" bg-black bg-cover bg-top px-8 py-10" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Fac})`}}>
      <div className="w-full flex flex-col lg:flex-row">
        <div ref={aboutRef} className="w-full lg:w-1/3 items-center lg:items-start space-y-1 md:space-y-9 lg:px-6 xl:px-12 pb-8 md:py-8 flex flex-col" style={{opacity:0}}>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">Meet Our</h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">Faculty</h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">Advisory</h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">Committee</h1>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-7 px-5 place-items-center justify-items-center md:justify-items-end">
          <div ref={aboutCardRef[0]} className="bg-black w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[75%] col-span-2 space-y-2  mb-8 px-8 py-4 flex flex-col items-center rounded-2xl  border-yellow-500" style={{borderTop:"1.25px solid #EAB308",borderBottom:"1px solid #EAB308",opacity:0}}>
            <div className="">
              <img className="w-24 h-24 rounded-3xl" src={PP} alt="" />
            </div>
            <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
              <div className=" flex flex-col items-center">
                <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center">N K Raut</h1>
                <h2 className="text-white font-semibold text-base sm:text-base text-center">Coordingator</h2>
              </div>
              {/* <div className="flex flex-col items-center">
                <p className="text-white text-justify text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  maxime?
                </p>
              </div> */}
              <div className="flex space-x-3">
                <a className="" href=""><img className="w-5" src={Twitter} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Insta} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Git} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div ref={aboutCardRef[1]} className="bg-black w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[75%] col-span-2 space-y-2  mb-8 px-8 py-4 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500" style={{opacity:0}}>
            <div className="">
              <img className="w-24 h-24 rounded-3xl" src={PP} alt="" />
            </div>
            <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
              <div className=" flex flex-col items-center">
                <h1 className="text-yellow-500 font-bold  text-center">N K Raut</h1>
                <h2 className="text-white font-semibold text-base sm:text-base text-center">Coordingator</h2>
              </div>
              {/* <div className="flex flex-col items-center">
                <p className="text-white text-justify text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  maxime?
                </p>
              </div> */}
              <div className="flex space-x-3">
                <a className="" href=""><img className="w-5" src={Twitter} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Insta} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Git} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          

          <div ref={aboutCardRef[2]} className="bg-black w-[80%] sm:w-[70%] lg:w-[70%] xl:w-[70%] row-span-2 col-span-3 space-y-4 lg:mr-5 xl:mr-10 my-2 h-fit px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500" style={{opacity:0}}>
            <div className="">
              <img className="w-36 h-36 rounded-3xl" src={PP} alt="" />
            </div>
            <div className="flex flex-col justify-between space-y-5 h-full items-center mx-5">
              <div className="space-y-1 flex flex-col items-center">
                <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">N K Raut IMP</h1>
                <h2 className="text-white font-semibold text-base sm:text-lg text-center">Coordingator</h2>
              </div>
              {/* <div className="flex flex-col items-center">
                <p className="text-white text-justify text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  maxime?
                </p>
              </div> */}
              <div className="flex space-x-3">
                <a className="" href=""><img className="w-6" src={Twitter} alt="" /></a>
                <a className="" href=""><img className="w-6" src={Insta} alt="" /></a>
                <a className="" href=""><img className="w-6" src={Git} alt="" /></a>
                <a className="" href=""><img className="w-6" src={Linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div ref={aboutCardRef[3]} className="bg-black w-[80%]  sm:w-[70%] lg:w-[80%] xl:w-[75%] col-span-2 space-y-2  my-2 px-8 py-4 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500" style={{opacity:0}}>
            <div className="">
              <img className="w-24 h-24 rounded-3xl" src={PP} alt="" />
            </div>
            <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
              <div className=" flex flex-col items-center">
                <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center">N K Raut</h1>
                <h2 className="text-white font-semibold text-base sm:text-base text-center">Coordingator</h2>
              </div>
              {/* <div className="flex flex-col items-center">
                <p className="text-white text-justify text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  maxime?
                </p>
              </div> */}
              <div className="flex space-x-3">
                <a className="" href=""><img className="w-5" src={Twitter} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Insta} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Git} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div ref={aboutCardRef[4]} className="bg-black w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[75%] col-span-2 space-y-2  my-2 px-8 py-4 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500" style={{opacity:0}}>
            <div className="">
              <img className="w-24 h-24 rounded-3xl" src={PP} alt="" />
            </div>
            <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
              <div className=" flex flex-col items-center">
                <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center">N K Raut</h1>
                <h2 className="text-white font-semibold text-base sm:text-base text-center">Coordingator</h2>
              </div>
              {/* <div className="flex flex-col items-center">
                <p className="text-white text-justify text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  maxime?
                </p>
              </div> */}
              <div className="flex space-x-3">
                <a className="" href=""><img className="w-5" src={Twitter} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Insta} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Git} alt="" /></a>
                <a className="" href=""><img className="w-5" src={Linkedin} alt="" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
