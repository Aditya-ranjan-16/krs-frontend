import React, { useState } from 'react'

function Questions(props) {

    // const sub = () => {{onsubmit}}
    console.log(props.fields)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    function next() {
    // console.log(showFInalData[0].fields)
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < props.len) {
            setCurrentQuestion(nextQuestion);
        }
        console.log(nextQuestion)
    }
    function back() {
        const prevQuestion = currentQuestion - 1;
            if (prevQuestion >= 0) {
                setCurrentQuestion(prevQuestion);
            }
    }

    const [showForm, setFormStatus] = useState(false);

    const viewData = () => setFormStatus(true);
  return (
    <div>
        {!showForm && (
            <div className='flex flex-col items-center justify-center py-8 space-y-4'>
                <h1 className='text-yellow-500 text-3xl font-bold'>Hello!!!</h1>
                <a href="#Questions">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded font-semibold  mr-5 text-xl lg:text-xl md:text-sm sm:text-sm justify-self-center" 
                    onClick={viewData} >
                    Register Yourselves!
                  </button>
                </a>
            </div>
        )}
        {showForm && (
            <div>
                <div>            
                    <div className="my-5 px-10">
                        <label className='text-xl text-center text-white' htmlFor="">{props.fields[currentQuestion].name}</label>
                        <input className="text-lg w-full py-0.5 px-1 mx-1 rounded mt-2" type={props.fields[currentQuestion].type} placeholder={props.fields[currentQuestion].value} />
                    </div>        
                </div>

                {/* buttons */}
                <div className="flex justify-center items-center m-10 ">
                <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2  "
                    onClick={back} >
                    Back
                </button>

                {currentQuestion + 1 == props.len ? (
                <div>
                    <button className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                        onClick={onsubmit} >
                        Submit
                </button>
                {/* <text className="text-5xl text-white">SUBMITTED SUCCESSFULLY!!</text> */}
                </div>
                ) : (
                    <button className="focus:outline-none  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                        onClick={next} >
                        Next
                    </button>
                )}
                </div>
            </div>
            
        )}
        

        
        
    </div>
  )
}

export default Questions