import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import Delete from '../../public/delete.png'
import Edit from '../../public/edit.png'

const achievementsCard = [
  {
    img1: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    img2: "https://user-images.githubusercontent.com/88647567/150991382-9fe442a8-0b36-4294-a4bd-fb3fbf590e18.jpg",
    position: "2nd",
    year: "2019",
    teamName: "Technocrats",
    eventName1: "Treckon",
    eventName2: "Teck Fest",
    eventPlace: "IIT BBSR"
  },
  {
    img1: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    img2: "https://user-images.githubusercontent.com/88647567/150991382-9fe442a8-0b36-4294-a4bd-fb3fbf590e18.jpg",
    position: "2nd",
    year: "2019",
    teamName: "Technocratsx",
    eventName1: "Treckon",
    eventName2: "Teck Fest",
    eventPlace: "IIT KGP"
  },
]



function AdminAchievements() {

  const [achievements, setAchievements] = useState(achievementsCard)  
  const [ach, setAch] = useState({teamName: "", img1: "", img2: "", position: "", year: "", teamName: "", eventName1: "", eventName2: "", eventPlace: ""})
  const [showModal, setShowModal] = useState({show:false,index:null});
  //  add events
  const handleClick = (e)=>{
    e.preventDefault();
    setAchievements(achievements.concat(ach))
    setAch({teamName: "", img1: "", img2: "", position: "", year: "", eventName1: "", eventName2: "", eventPlace: ""})
  }
  const onChange = (e)=>{
    setAch({...ach, [e.target.name]: e.target.value})
  }
  console.log(ach)

  // deleting events
  const deleteAchievement = (teamName) => {
    const newAchievements = achievements.filter((achievement)=>{return achievement.teamName !== teamName});
      setAchievements(newAchievements)
      console.log(newAchievements)
  }

  // editing events
  const updateCard = (i) => {
    setAch({teamName: achievementsCard[i].teamName, img1: achievementsCard[i].img1, img2: achievementsCard[i].img2, position: achievementsCard[i].position, year: achievementsCard[i].year, eventName1: achievementsCard[i].eventName1, eventName2: achievementsCard[i].eventName2, eventPlace: achievementsCard[i].eventPlace});
    setShowModal({show:true,index:i})
  }
  const editAchievements=()=>{
    achievementsCard[showModal.index]={teamName:ach.teamName,img1:ach.img1,img2:ach.img2,position:ach.position,year:ach.year,eventName1:ach.eventName1,eventName2:ach.eventName2,eventPlace:ach.eventPlace}
    setAchievements(achievementsCard)
    setAch({teamName: "", img1: "", img2: "", position: "", year: "", eventName1: "", eventName2: "", eventPlace: ""})
    setShowModal({show:false,index:null})
 
   }

  // modal state
  const closeModal = () => {
    setAch({teamName: "", img1: "", img2: "", position: "", year: "", eventName1: "", eventName2: "", eventPlace: ""})
    setShowModal({show:false,index:null})
  }

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        {/* form */}
        <div className='py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500'>
              <h1 className="p-2 text-3xl text-white">Add an achievement</h1>
              <div className='grid grid-cols-3'>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Team Name</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Team Name' type="text" name='teamName' value={ach.teamName} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Event Name1</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Event Name1' type="text" name='eventName1' value={ach.eventName1} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Event Name2</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Event Name2' type="text" name='eventName2' value={ach.eventName2} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Year</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Year' type="text" name='year' value={ach.year} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Image 1</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Image 1 link' type="text" name='img1' value={ach.img1} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Image 2</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Image 2 Link' type="text" name='img2' value={ach.img2} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Position</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Position' type="text" name='position' value={ach.position} onChange={onChange} />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Event Place</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Events Place' type="text" name='eventPlace' value={ach.eventPlace} onChange={onChange} />
                </div>
              </div>
              <button type="submit" onClick={handleClick} className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white">Add achievement</button>
            </div>


            {/* cards */}
            {achievements.map((achievementsData,i) => {
              return (
              <div  key={i} className=' border-2 border-yellow-500 rounded-xl my-5'>  
                <div className='flex flex-col lg:flex-row lg:px-10 py-10 items-center lg:justify-between'>
                    <div className='text-white w-1/2 py-10 px-10 flex flex-col items-center lg:items-start'>
                        <div className=''>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-8 text-yellow-500'>Team <br />{achievementsData.teamName}</h1>
                        <h2 className='text-2xl md:text-3xl'>Participated by: </h2>
                        <h2 className='text-xl'>Ram Kumar <br />Ram Kumar <br />Ram Kumar <br /> Ram Kumar</h2>
                        </div>
                    </div>
                        <div className='w-full sm:w-2/3 lg:w-1/2 h-[400px] py-10 sm:px-10 flex relative justify-center items-center'>
                        <div className={` absolute left-10  z-0 blur-[2px] h-2/3 duration-1000 w-[70%] bg-cover rounded-2xl border-4`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${achievementsData.img1})`}}>
                            <div className='h-1/2 bg-gradient-to-r from-yellow-500 to-gray-900 rounded-2xl'>
                            <div className='h-1/2 flex justify-between items-center px-4 bg-gradient-to-r from-gray-900 to-gray-600 rounded-2xl'>
                                <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.position}</h1>
                                <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.year}</h1>
                            </div>
                            <div className='px-4 flex justify-between items-center'>
                                <h1 className='text-2xl md:text-3xl font-bold text-white'>Team <br /> {achievementsData.teamName}</h1>
                                <h1 className='md:text-base font-bold text-white'>{achievementsData.eventName1} <br /> {achievementsData.eventName2} <br />{achievementsData.eventPlace}</h1>
                            </div>
                            </div>
                        </div>

                        <div className={` absolute z-10 h-4/5 duration-1000 w-[70%] bg-cover rounded-2xl border-4`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${achievementsData.img2})`}}>
                            <div className='h-1/2 bg-gradient-to-r from-yellow-500 to-gray-900 rounded-2xl'>
                            <div className='h-1/2 flex justify-between items-center px-4 bg-gradient-to-r from-gray-900 to-gray-600 rounded-2xl'>
                                <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.position}</h1>
                                <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.year}</h1>
                            </div>
                            <div className='px-4 flex justify-between items-center'>
                                <h1 className='text-3xl font-bold text-white'>Team <br /> {achievementsData.teamName}</h1>
                                <h1 className='text-base font-bold text-white'>{achievementsData.eventName1} <br /> {achievementsData.eventName2} <br />{achievementsData.eventPlace}</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                </div>
                <div className="flex space-x-4 pb-4 justify-center">
                    <Link className="text-white" onClick={() => deleteAchievement(achievementsData.teamName)} to=""><img className='w-6' src={Delete} alt="dlt" /></Link>
                    <Link className="text-white" onClick={() => updateCard(i)} to=""><img className='w-6' src={Edit} alt="edit" /></Link>      
                </div>
            </ div>    
       )
      })}

      {/* modal */}
      {showModal.show ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl text-white font-semibold">Edit achievements</h3>
                        <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={closeModal}>
                          <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className='grid grid-cols-3'>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Team Name</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter name' type="text"name='teamName' value={ach.teamName} onChange={onChange}  />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Event Name1</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Roll no.' type="text" name='eventName1' value={ach.eventName1} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Event Name2</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter domain' type="text" name='eventName2' value={ach.eventName2} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Year</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter designation' type="text" name='year' value={ach.year} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Image 1</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Year' type="text" name='img1' value={ach.img1} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Image 2</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter image' type="text" name='img2' value={ach.img2} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Position</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter About' type="text" name='position' value={ach.position} onChange={onChange} />
                        </div>
                        <div className="py-2 px-4">
                          <h2 className="text-xl p-1 my-1 text-white">Event Place</h2>
                          <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Linkedin link' type="text" name='eventPlace' value={ach.eventPlace} onChange={onChange} />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  onClick={closeModal}>Close </button>
                        <button className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  onClick={editAchievements} >Save Changes </button>
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

export default AdminAchievements