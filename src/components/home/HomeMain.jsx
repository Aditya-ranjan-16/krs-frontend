import React, { useState, useEffect,useLayoutEffect, useRef } from 'react'
import "./home.css"
import robocon from '../../public/robocon.jpg'
import ff from '../../public/face_fence.jpg'
import Pradarshana from '../../public/prdar.jpeg'
const homePageData = [
  {
    img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    heading1: "KIIT ROBOTICS SOCIETY",
    heading2: "Ideas that enlighten",
    description: "Robotics is an inter disciplinary field , so also ,we at kiit robotics society believe in innovation through teamwork.The aim is to build a community and technical hub where teaching , training and research bind tech enthusiasts, to create a better tomorrow."
  },
  {
    img: Pradarshana,
    heading1: "Pradarshana 1.0",
    heading2: "Greatest technical exhibition!",
    description: "KRS brings to you one of the most awaited and greatest technical exhibitions.Pradarshana 1.0 is our motive to display the amazing talent showcased by our participants in the projects they made"
  },
  {
    img: robocon,
    heading1: "Robocon 2022",
    heading2: "Qualified For Nationals!! ",
    description: "KRS is participating in The prestigious international competion Robocon 2022.Our Team has qualified for Nationals! We are ready to compete"
  },
  {
    img: ff,
    heading1: "Face Fence",
    heading2: "Know your breath!",
    description: " A smart mask that moniters your health.Equiped with exhale breath analysis and exquisite app interface for the users "
  }
];

let count=0
function HomeMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const handleOnNextClick = () => {
    count = (count + 1) % homePageData.length;
    console.log("called")
    console.log(count+'kk')
    setCurrentIndex(count);
   
    slideRef.current.classList.add("fade-anim");
    
  };

    const handleOnPrevClick = () => {
         const productsLength = homePageData.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
   
      
    };

      useLayoutEffect(() => {
      const slideInterval=  setInterval(() => {
        console.log("removed")
     
          handleOnNextClick();
          setTimeout(()=>{
            slideRef.current.classList.remove("fade-anim");
          }, 2000);
        }, 6000);

      return ()=>{clearInterval(slideInterval) 
   
      }
      }, []);
    
 
        

    
      
  return (
  //   <div ref={slideRef} className="w-full select-none relative">
      

  //  

      // <div className="h-[100vh] bg-cover bg-left" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homePageData[currentIndex].img})`}}>
      //   <div className="pl-20 pt-40">
      //     <h1 className="text-7xl font-bold text-yellow-500">{homePageData[currentIndex].heading1}</h1><br />
      //     <h2 className="text-5xl font-semibold text-white">{homePageData[currentIndex].heading2}</h2><br />
      //     <p className="w-1/3 text-xl text-white">{homePageData[currentIndex].description}</p>
      //   </div>
      // </div>
  //     {/* <img className="h-[100vh] w-full" src={homePageData[currentIndex]} alt="img1" /> */}
  //     <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex  justify-between items-center">
  //       <button className="text-4xl font-extrabold" onClick={handleOnPrevClick}>&#8678;</button>
  //       <button className="text-4xl font-extrabold" onClick={handleOnNextClick}>&#8680;</button>
  //     </div>
  //   </div>
  <div className="max-w-screen-xl m-auto">
      <div ref={slideRef} className="w-full relative select-none ">
      <div className="h-[100vh] bg-cover bg-left" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homePageData[currentIndex].img})`}}>
        <div className="lg:pl-20 pl-7 pt-28 ">
          <h1 className="text-7xl   font-bold text-yellow-500">{homePageData[currentIndex].heading1}</h1><br />
          <h2 className="text-5xl pl-5 font-semibold text-white">{homePageData[currentIndex].heading2}</h2><br />
          <p className="lg:w-1/3 w-4/5 pl-7  text-xl text-white">{homePageData[currentIndex].description}</p>
        </div>
      </div>    
   
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg></button>
          <button onClick={handleOnNextClick}><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" class="lg:h-10 lg:w-10  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
        </div>
      </div>
    </div>
  )
}

export default HomeMain;
