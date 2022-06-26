import React from 'react'
import PP from "../../public/pp.jpeg"
import Ach from "../../public/ach.jpg"

function HomeAchievements() {
  return (
    <div className='bg-black bg-cover bg-bottom flex flex-col pb-10 ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${Ach})`}}>
        
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500'>Achievements
        <button className='bg-yellow-500 w-fit self-center px-4 ml-5 text-black font-semibold text-2xl rounded-lg'><a href="/achievements">All</a></button>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center sm:px-[5%] py-10'>
            <div className='w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 text-lg font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
            <div className='w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 text-lg font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
            <div className='w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 text-lg font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeAchievements