
import { useEffect,useLayoutEffect,useRef } from "react";

function AboutUsCardMain({data,index}){
    const cardRef = useRef();
    useLayoutEffect(() => {
      window.addEventListener("scroll", onScroll);
  
      return () => {
        window.removeEventListener("scroll", onScroll);
  
    }
    }, []);
  
    const onScroll = () => {
      const topPos = cardRef.current.getBoundingClientRect().top;
      const scrollPos = window.innerHeight;
  
      if (topPos< scrollPos-100 && topPos>0) {
        console.log(topPos+"--"+scrollPos)
        cardRef.current.style.opacity = 1;
        if(index%2==0){
            cardRef.current.classList.add("slide-left");
          
        }else{
            cardRef.current.classList.add("slide-right");
        }
        
      }
    }
return(
    <div ref={cardRef} className="my-5 px-4 py-4 w-[70%] md:w-[80%] rounded-2xl border-transparent glass_effect_about " style={{opacity:0}} >
    <img className="w-16 h-16 m-2 mr-4 float-left rounded-full" src={data.img} alt="" />
    <div className=" mb-5 mt-5 text-sm text-yellow-500 font-bold">{data.title}</div>
    <p className="text-white  text-xs  text-justify">

      {data.description}
    </p>
  </div>
)
}
export default AboutUsCardMain
