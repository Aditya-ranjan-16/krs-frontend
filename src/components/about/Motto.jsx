import letter from "../../public/letter.png";
import lightbulb from "../../public/lightbulb.png";
import target from "../../public/target.png";
import hand from "../../public/hand.png";


const AboutUsData = [
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: lightbulb,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: letter,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: target,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: hand,
  },
 
];

function Motto() {
  return (
    <div className="w-full flex flex-col lg:flex-row-reverse items-center">
    <div className='w-full lg:w-1/3 items-center lg:items-start space-y-1 md:space-y-9 px-12 pb-8 md:py-8 flex flex-col'>
      <h1 className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">OUR</h1>
      <h1 className="text-yellow-500 text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">MOTTO</h1>
    </div>
    <div className="w-full lg:w-1/1 py-5 grid md:grid-cols-2 mx-16 grid-cols-1 mr-20 justify-items-center">
      {AboutUsData.map((data) => {
        return (
          <div className="my-5 px-8 py-8 w-[70%] md:w-[80%] rounded-2xl border border-yellow-500 bg-[#00000070] ">
            <img className="w-12 h-12 m-2 mr-4 float-left" src={data.img} alt="" />
            <p className="text-white text-xs  text-justify">
              {data.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default Motto;