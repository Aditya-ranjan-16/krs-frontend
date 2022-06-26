import React from 'react'
import PP from "../../public/pp.jpeg"

import watch from '../../public/watch.jpg'

import fe2 from '../../public/fe2.jpg'


const featuredData = [
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  },
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  },
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  }  
];


function FeaturedMain() {
  return (
    <div className='bg-black pb-20 bg-fixed bg-cover bg-right' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fe2})`}}>
      <div className=''>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-8 pb-12 px-10 text-yellow-500'>Featured Works</h1>
        {/* <div className='w-full py-10 grid grid-cols-1 md:grid-cols-2; px-10'>
          {featuredData.map((data) => {
            return(
              <div className='flex flex-col space-y-3 sm:flex-row  sm:even:flex-row-reverse bg-[#111111]  my-5 px-8 py-8 even:justify-self-end w-full md:w-5/6 lg:w-4/6 rounded-2xl border-2 border-yellow-500'>
                <div className='w-full flex justify-center sm:w-2/5 md:w-1/3'>
                  <img className='w-96 sm:w-full h-96 sm:h-full rounded-2xl' src={data.img} alt="" />
                </div>
                <div className='text-white w-full sm:w-3/5 md:w-2/3 flex flex-col items-center sm:items-start sm:mx-5 text-justify'>
                  <h1 className='text-yellow-500 font-bold text-xl sm:text-2xl'>{data.heading}</h1>
                  <p>{data.description}</p>
                  <p></p>
                </div>
              </div>
            )
          })}
          
        </div> */}

        {/* {featuredData.map((featuredData) => {
          return (
            <section class="overflow-hidden text-gray-700">
              <div class=" px-[5%]">
                <div class="flex flex-wrap flex-col lg:flex-row">
                  <div class="flex flex-wrap w-full lg:w-1/2">
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-1/2 p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-full p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap w-full lg:w-1/2">
                    <div class="w-full p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-1/2 p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-1/2 p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                  </div>
                </div>
              </div>
          </section>
          )
        })} */}
        {featuredData.map((featuredData) => {
          return (
            <section class="overflow-hidden text-gray-700">
              <div class=" px-[5%]">
                <div class="flex flex-wrap justify-center flex-row">
                  <div class="flex flex-wrap w-4/5">
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-1/2 p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                    <div class="w-full p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={watch}
                      />
                    </div>
                  </div>
                </div>
              </div>
          </section>
          )
        })}


      </div>
    </div>
  )
}

export default FeaturedMain