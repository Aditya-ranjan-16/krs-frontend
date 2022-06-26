import React from "react";
import Card from "./Card";
import bg from "../../public/bg.png"

function EventCards() {
  

  
  return (
    <div className="bg-cover bg-black bg-bottom py-5" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`}}>
      <div>
        <h1 className="text-center font-poppins text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold py-6 text-amber-400">
          Events
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 rounded-lg text-2xl font-semibold ml-5">
            All
          </button>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 justify-items-center my-10 mx-14 justify-between">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default EventCards;
