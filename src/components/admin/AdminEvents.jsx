import React, { useState } from "react";
import { Link } from "react-router-dom";
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'

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

function AdminEvents() {
  const [events, setEvents] = useState(eventCard);
  const [eve, setEve] = useState({name: "", date: "", venue: "", status: "", img: "", description: "", sheetId: ""});

  //  add events
  const handleClick = (e) => {
    e.preventDefault();
    setEve({name: "", date: "", venue: "", status: "", img: "", description: "", sheetId: ""});
    setEvents(events.concat(eve));
  };
  const onChange = (e) => {
    setEve({ ...eve, [e.target.name]: e.target.value });
  };
  console.log(eve);

  // deleting events
  const deleteEvent = (name) => {
    const newEvents = events.filter((event) => {
      return event.name !== name;
    });
    setEvents(newEvents);
    console.log(newEvents);
  };

  // modal state
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
      {/* form */}
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Add an event</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Name</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event name" type="text" name='name' value={eve.name} onChange={onChange}/>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Date</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event date" type="date" name='date' value={eve.date} onChange={onChange}/>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Venue</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event venue" type="text" name='venue' value={eve.venue} onChange={onChange}/>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Status</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event status" type="text" name='status' value={eve.status} onChange={onChange}/>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Image</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter image link" type="text" name='img' value={eve.img} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Description</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter description of the event..." type="text" name='description' value={eve.description} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Event Sheet ID</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter event Sheet ID" type="text" name='sheetId' value={eve.sheetId} onChange={onChange}/>
          </div>
        </div>

        <button type="submit" onClick={handleClick} className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white" > Add event </button>
      </div>


      {events.map((eventsData) => {
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
                  <Link className="text-white" onClick={() => deleteEvent(eventsData.name)} to=""><img className='w-6' src={Delete} alt="dlt" /></Link>
                  <Link className="text-white" onClick={() => setShowModal(true)} to=""><img className='w-6' src={Edit} alt="edit" /></Link>      
                </div>
              </div>
              <div className='w-[350px] order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2'>
                <img className='w-full h-full rounded-xl' src={eventsData.img} alt="" />
              </div>
            </div>
          )
        })}
      {/* cards */}
      {/* <div className="py-4">
        <div className="grid grid-cols-3">
          {events.map((event) => {
            return (
              <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                <h2 className="">{event.name}</h2>
                <div className="flex justify-between">
                  <h3 className="text-sm">{event.status}</h3>
                  <div className="flex space-x-2">
                    <Link className="" onClick={() => deleteEvent(event.name)} to="" ><img src="" alt="dlt" /></Link>
                    <Link className="" onClick={() => setShowModal(true)} to=""><img src="" alt="edit" /></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Edit event
                  </h3>
                  <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-cols-2">
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Name</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter name"
                      type="text"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Date</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter date"
                      type="text"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Venue</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter venue"
                      type="text"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Status</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter status"
                      type="text"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Image</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter image"
                      type="text"
                    />
                  </div>
                  
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Description</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter description"
                      type="text"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h2 className="text-xl p-1 my-1 text-white">Sheet ID</h2>
                    <input
                      className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter SheetID"
                      type="text"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>Close</button>
                  <button className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default AdminEvents;
