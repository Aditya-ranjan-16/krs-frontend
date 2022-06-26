import React from "react";
import AboutUsCard from "../components/about/AboutUsCard";
import Motto from "../components/about/Motto";
import AB1 from "../public/ab1.jpg"

function AboutUs() {
  return (
    <div className="bg-cover bg-black bg-top py-10" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${AB1})`}}>
      <AboutUsCard />
    
    </div>
  );
}

export default AboutUs;