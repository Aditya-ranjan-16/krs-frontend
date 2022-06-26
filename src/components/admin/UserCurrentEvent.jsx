import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Edit from '../../public/edit.png'
import qrbg from '../../public/qrbg.jpg'
import qr from '../../public/qr.png'



const eventCard = [
    {
      name: "Robowar",
      date: "2022-06-21",
      venue: "KRS ROOM",
      status: "registration open",
      img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
      description: "Lorem ndi eius iusto. Provident maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
      sheetId: ""
    },
    {
        name: "Robocon",
        date: "2022-06-21",
        venue: "KRS ROOM",
        status: "registration open",
        img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
        description: "Lorem ndi eius iusto. Provident maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
        sheetId: ""
      },
  ];

function UserCurrentEvent(props) {
    const vis = props.curVisible.visibility
    console.log(vis)

    
  // modal state
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`w-full py-10 px-[5%] ${vis} justify-items-center`}>
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
                    <div className="flex space-x-4">
                      <Link className="text-white" onClick={() => setShowModal(true)} to=""><img className='w-6' src={qr} alt="edit" /></Link>      
                    </div>
                  </div>
                  <div className='w-[350px] order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2'>
                    <img className='w-full h-full rounded-xl' src={eventsData.img} alt="" />
                  </div>
                </div>
              )
          })}

        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    QR Code
                  </h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex justify-center px-16 py-8">
                  <img src={qrbg} alt="" />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white bg-yellow-500 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          
        </div>
  )
}

export default UserCurrentEvent