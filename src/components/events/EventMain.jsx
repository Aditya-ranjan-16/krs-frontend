import React from 'react'
import EventSlider from './EventSlider'; 
import bg from '../../public/bg.png'

export const eventsData = [
  {
    img1: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    img2: "",
    img3: "",
    paragrapg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto voluptate numquam dicta id excepturi dolor, a nihil,  accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
    eventName: "Drone Workshop",
    date: "22nd July",
    venue: "campus 14, KIIT",
  },
  
  {
    img1: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    img2: "",
    img3: "",
    paragrapg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto voluptate numquam dicta id excepturi dolor, a nihil,  accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
    eventName: "Drone Workshop",
    date: "",
    venue: "",
  },
];

function EventMain() {
  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500'>Events</h1>
        {eventsData.map((eventsData,i) => {
          return (
            <div key={i} className='flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between'>
              <div className='text-white order-2 md:order-1 w-full md:w-2/3 py-10 px-10 flex flex-col justify-between'>
                <div>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-8 text-center md:text-left text-yellow-500'>{eventsData.eventName}</h1>
                  <h6 className='text-1xl sm:text-1xl  md:text-1xl xl:text-1xl font-light pb-8 text-center md:text-left text-yellow-500'><i>{eventsData.date} <br/>{eventsData.venue}</i></h6>
                  <p className='text-2x1 font-thin sm:text-xl text-justify'>{eventsData.paragrapg}</p><br />
                </div>
                <div className='flex mt-6'>
                  <button className='bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full'>Register</button>
                </div>
              </div>
              <div  className='w-[350px] bg-white order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2 event_slider_body '>
              <EventSlider key={i} />
              </div> 
            </div>
          )
        })}
        

      </div>
    </div>
  )
}


export default EventMain