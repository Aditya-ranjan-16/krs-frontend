import event from "../../public/event.jpg";
import { useLayoutEffect,useRef } from "react";
function Card() {

  const eventRef = useRef();

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollAbout);

    return () => {
      window.removeEventListener("scroll", onScrollAbout);

  }
  }, []);
  const onScrollAbout = () => {
    const topPos = eventRef.current.getBoundingClientRect().top;
    const scrollPos = window.innerHeight;
   
    if (topPos< scrollPos-100 && topPos>0) {
      eventRef.current.style.opacity = 1;
      eventRef.current.classList.add("half-flip");
    }


  }



    return (
      <div>
        <div ref={eventRef} class="max-w-sm box-border bg-black border-4 border-solid border-amber-400  rounded-3xl" style={{opacity:0}} >
          <div>
            <img src={event} className="rounded-lg px-14 pt-8" />
          </div>
          <div class="p-5">
            <h1 className="text-center font-poppins text-2xl font-bold py-2 text-amber-400">
              PRADARSHANA 1.0
            </h1>
            <p class="mb-3 font-WorkSans text-1xl text-white text-justify px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              veniam reprehenderit aperiam autem, placeat labore quod voluptates
              quas vitae earum ratione perspiciatis eius voluptas excepturi
              praesentium vel dolore neque veritatis?\
            </p>
          </div>
          <button
            type="button"
            class=" flex items-center justify-center w-full px-6 py-2.5 bg-amber-400 text-black font-WorkSans text-xl font-bold rounded-b-2xl hover:bg-amber-600 "
          >
            REGISTER
          </button>
        </div>
      </div>

    );
  }

  export default Card