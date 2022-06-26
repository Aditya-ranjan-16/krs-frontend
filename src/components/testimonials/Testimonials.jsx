import TestCard from "./TestCard";
import tbg from "../../public/dronebackground.jpg"
import './slider.css'
function Testimonials() {
  return (
    <div className="bg-cover bg-black py-5" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${tbg})`}}>
      <section className=" text-gray-700 ">
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto  py-6">
        <button className="p-2 rounded-full bg-zinc-800
                border border-solid border-zinc-800">
        <h1 className="text-center font-poppins text-xl font-bold text-amber-400">
        TESTIMONIALS </h1>
        </button>
        
          <p className="font-WorkSans text-2xl text-white pt-3">
          What ❤️️KIITians say ️
          </p>
        </div>
    <div class="slider">
	<div class="slide-track">
	
		
		<div class="slide">
      <TestCard/>
		</div>
    <div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>	<div class="slide">
      <TestCard/>
		</div>
	</div>
</div>
       
      </section>
    </div>

  );
}

export default Testimonials;