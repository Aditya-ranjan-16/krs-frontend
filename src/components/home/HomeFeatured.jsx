import React from "react";
import FG from "./FeaturedGrid";
import dbg from "../../public/dronebackground.jpg";
import watch from "../../public/watch.jpg";
import { useLayoutEffect,useRef } from "react";
function HomeFeatured() {
  const featureRef = useRef();
  const featureCardRef = [useRef(0),useRef(1),useRef(2),useRef(3),useRef(4),useRef(5)];
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollAbout);

    return () => {
      window.removeEventListener("scroll", onScrollAbout);

  }
  }, []);

  const onScrollAbout = () => {
    const topPos = featureRef.current.getBoundingClientRect().top;
    const scrollPos = window.innerHeight;
   
    if (topPos< scrollPos-100 && topPos>0) {
      featureRef.current.style.opacity = 1;
      featureRef.current.classList.add("fade-animation");
              
    }
for(var i=0;i<6;i++){
  const topPoscard = featureCardRef[i].current.getBoundingClientRect().top;
  const scrollPoscard = window.innerHeight;
  if (topPoscard< scrollPoscard-100 && topPoscard>0) {
    featureCardRef[i].current.style.opacity = 1;
   
    featureCardRef[i].current.classList.add("zoom");
   
        
      }
}

  }






  return (
    <section class="overflow-hidden text-gray-700">
      <div ref={featureRef} className="bg-cover bg-black pb-10" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${dbg})`,opacity:0}}>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500">Featured Works
          <button className="bg-yellow-500 w-fit self-center px-4 ml-5 text-black font-semibold text-2xl rounded-lg">All</button>
        </h1>
        {/* <div>
         <div className="flex m-5">
           <FG />
           <FG />
           <FG />
         </div>

         <div className="flex  m-5">
           <FG />
           <FG />
           <FG />
         </div>
         </div>
         </div>
         );
        } */}

        <div class="py-10 px-[5%]">
          <div class="flex flex-wrap flex-col lg:flex-row">
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div ref={featureCardRef[0]} style={{opacity:0}} class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div ref={featureCardRef[1]} style={{opacity:0}}class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div ref={featureCardRef[2]} style={{opacity:0}} class="w-full p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div ref={featureCardRef[3]} style={{opacity:0}} class="w-full p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div ref={featureCardRef[4]} style={{opacity:0}} class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div ref={featureCardRef[5]} style={{opacity:0}} class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatured;
