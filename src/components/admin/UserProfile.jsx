import React, { useState } from 'react'
import PP from '../../public/pp.jpeg'
import UserCurrentEvent from './UserCurrentEvent'
import UserPreventEvent from './UserPreviousEvent'

function UserProfile() {
    
  const [curVis, setcurVis] = useState({visibility: "block", border: "2"})
  const [preVis, setpreVis] = useState({visibility: "hidden", border: "0"})

  const handleOnCurrent = () => {
    setcurVis({visibility: "block", border: "2"});
    setpreVis({visibility: "hidden", border: "0"});
  }
  const handleOnPrevious = () => {
    setcurVis({visibility: "hidden", border: "0"});
    setpreVis({visibility: "block", border: "2"});
  }

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        <div className='flex justify-between items-end'>
            <img className='rounded-full w-64 h-64' src={PP} alt="" />
            <h1 className='text-white text-4xl font-bold text-right'>Shashank Jaiswal <br /> 2005405</h1>
        </div>
        <hr className=" mt-2 border-t-4 border-white pb-16" />

        
        <div className='flex justify-center'>
          <button className='w-full' onClick={handleOnCurrent}>
            <h1 className={`text-center text-2xl sm:text-3xl md:text-4xl  border-${curVis.border} border-yellow-500 font-bold mt-6 text-yellow-500`}>Current Events</h1>
          </button>
          <button className='w-full' onClick={handleOnPrevious}>
            <h1 className={`text-center text-2xl sm:text-3xl md:text-4xl  border-${preVis.border} border-yellow-500 font-bold mt-6 text-yellow-500`}>Previous Events</h1>
          </button>
        </div>
        <hr className='border-[1px] border-yellow-500 bg-yellow-500' />
        
        <UserCurrentEvent curVisible={curVis}/>
        <UserPreventEvent preVisible={preVis} />
    </div>
  )
}

export default UserProfile