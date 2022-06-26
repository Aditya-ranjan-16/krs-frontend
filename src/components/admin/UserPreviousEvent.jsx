import React from 'react'
import { Link } from "react-router-dom";
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'
import PP from "../../public/pp.jpeg"
import Twitter from "../../public/twitter.png"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"



const eventCard = [
    {
      name: "Pradarshana",
      date: "2022-06-21",
      venue: "KRS ROOM",
      status: "registration open",
      img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
      description: "Lorem ndi eius iusto. Provident maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
      sheetId: ""
    },
    {
      name: "Workshop",
      date: "2022-06-21",
      venue: "KRS ROOM",
      status: "registration open",
      img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
      description: "Lorem ndi eius iusto. Provident maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
      sheetId: ""
    },
  ];



function UserPreventEvent(props) {
    const visi = props.preVisible.visibility

  return (
    <div className={`w-full py-10 px-[5%] ${visi} justify-items-center`}>
          {eventCard.map((eventsData) => {
            return (
                <div className='flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between border-2 rounded-xl border-yellow-500 my-5'>
                  <div className='text-white order-2 md:order-1 w-full md:w-2/3 py-10 px-10 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                      <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-8 text-center md:text-left text-yellow-500'>{eventsData.name}</h1>
                      <div>
                        <h2 className='text-base sm:text-xl text-yellow-500'>{eventsData.date}</h2>
                        <h2 className='text-base sm:text-xl text-yellow-500'>{eventsData.venue}</h2>
                      </div>
                    </div>
                    <div>
                      <p className='text-base sm:text-xl text-justify'>{eventsData.description}</p><br />
                    </div>
                    {/* <div className="flex space-x-4">
                      <Link className="text-white" onClick={() => deleteEvent(eventsData.name)} to=""><img className='w-6' src={Delete} alt="dlt" /></Link>
                      <Link className="text-white" onClick={() => setShowModal(true)} to=""><img className='w-6' src={Edit} alt="edit" /></Link>      
                    </div> */}
                  </div>
                  <div className='w-[350px] order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2'>
                    <img className='w-full h-full rounded-xl' src={eventsData.img} alt="" />
                  </div>
                </div>
              )
          })}
          
        </div>
  )
}

export default UserPreventEvent