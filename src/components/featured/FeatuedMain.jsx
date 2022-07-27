import React from "react";
import PP from "../../public/drone.jpg";
import watch from "../../public/watch.jpg";
import FlipCard from "./FlipCard";
import dbg from "../../public/dronebackground.jpg";

const featuredData = [
  {
    heading: "Drone 1.0",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
  },
  {
    heading: "Drone 2.0",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
  },
];

function FeaturedMain() {
  return (
    <div
    className="bg-cover bg-fixed bg-black pb-10" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${dbg})`,}}
    >
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-4 pb-6 px-5 text-yellow-500">
          Featured Works
        </h1>
        {featuredData.map((featuredData) => {
          return (
            <div class=" px-[7%]">
              <div class="flex ">
                <FlipCard
                  title={featuredData.heading}
                  img={featuredData.img}
                  desc={featuredData.description}
                  width="50%"
                />
                <FlipCard
                  title={featuredData.heading}
                  img={featuredData.img}
                  desc={featuredData.description}
                  width="50%"
                />
              </div>
              <div className="flex justify-center items-center">
                <FlipCard
                  title={featuredData.heading}
                  img={featuredData.img}
                  desc={featuredData.description}
                  width="100%"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedMain;
