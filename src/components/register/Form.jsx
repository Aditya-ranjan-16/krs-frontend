import React, { useState } from "react";
import Question from "./Question";

function Form() {
  const [showForm, setFormStatus] = useState(false);

  const viewData = () => setFormStatus(true);
  return (
    <div className="flex justify-center items-center xl:border-r-2 xl:border-t-0 lg:border-r-2 lg:border-t-0 md:border-t-2 sm:border-t-2 h-96 border-yellow-500 xl:w-[60%] lg:w-[60%] md:w-[100%] sm:w-[100%] ">
      {!showForm && (
        <div>
          <text className="text-yellow-500 font-bold text-7xl lg:text-7xl md:text-5xl sm:text-5xl underline underline-offset-4 decoration-stone-200">
            Hello!
          </text>

          <div className="flex justify-center mt-10">
            <a href="#Questions">
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded font-semibold  mr-5 text-xl lg:text-xl md:text-sm sm:text-sm"
                onClick={viewData}
              >
                Register Yourselves!
              </button>
            </a>

           
          </div>
        </div>
      )}
      {showForm && <Question onsubmit={onsubmit} />}
    </div>
  );
}

export default Form;
