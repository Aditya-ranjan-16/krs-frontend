import React from 'react'

function CreateTeam() {
  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        <div className='py-4 px-16 border-2 border-yellow-500 rounded-xl'>
            <h1 className='text-4xl font-semibold text-yellow-500'>Create or Join a Team</h1>
            <div className="py-2 px-4">
                <h2 className="text-xl p-1 my-1 text-white">Enter Team Code</h2>
                <div className='flex'>
                    <input className="text-lg w-2/3 py-0.5 px-1 mx-1 rounded" placeholder='Enter team code' type="text" name='name'/>
                    <button className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Join</button>
                </div>
            </div>
            <h1 className='text-white py-4 text-center font-semibold text-xl'>Or</h1>
            <div className="py-2 px-4 flex justify-center">
                <button className='text-lg w-1/3 text-white bg-yellow-500 py-0.5 px-1 mx-1 rounded'>Create a Code</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTeam