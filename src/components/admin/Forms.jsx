import React, { useState, useEffect, useRef } from 'react'
import cross from '../../public/cross.png'

function Forms() {
  const formdata = [
    {
      event: "pradarshana",
      typeofform: "registration",
      heading: "pra",
      subtitle: "darshana",
      instructions: "1.0",
    },
  ]

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Select Event</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="event">
              <option selected disabled hidden>Select</option>
              <option value="Pradarshana">Pradarshana</option>
              <option value="Robowar">Robowar</option>
              <option value="Drone Workshop">Drone Workshop</option>
              <option value="IoT Bootcamp">IoT Bootcamp</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Type of Form</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="typeofform">
              <option selected disabled hidden>Select</option>
              <option value="Registration">Registration</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter heading" type="text" name='heading' />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter subtitle" type="text" name='subtitle' />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter instructions" type="text" name='instructions' />
          </div>
        </div>

        <h1 className="p-2 text-2xl text-white">Add Fields</h1>
        <div className="px-5">
          <div className="px-5 grid grid-cols-4 gap-4 py-2">
            <label className='text-white text-xl text-center' htmlFor="">Name</label>
            <label className='text-white text-xl text-center' htmlFor="">Type</label>
            <label className='text-white text-xl text-center' htmlFor="">Value</label>
          </div>

          {/* Name Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Name" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" value="text">
              <option value="text" selected>text</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Namevalue" />
          </div>

          {/* Roll Number Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Roll Number" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" value="text">
              <option value="number" selected>number</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Rollvalue" />
          </div>

          {/* Email Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Email" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" value="text">
              <option value="email" selected>email</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Emailvalue" />
          </div>

          {/* For More Feilds */}
          {fieldList.map((list, index) => {
            return (
              <div key={index} className="px-5 grid grid-cols-3 gap-4 py-2">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" />
                <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type">
                  <option value="select" selected disabled hidden>Select</option>
                  <option name='type' value="text">text</option>
                  <option name='type' value="number">number</option>
                  <option name='type' value="email">email</option>
                </select>
                <div className='flex'>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="value" />
                  <button className="text-xl  px-2 mx-1 rounded-lg text-white" onClick={() => handleRemoveField(index)}><img className='w-6' src={cross} alt="remove" /></button>
                </div>
              </div>

            )
          })}
        </div>

        <button className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={handleAddField}>+ Add field</button>
        <br />
        {show ? <p className="alertText">{show}</p> : ""}
        <button type="submit" className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={handleClick} >Create Form</button>

      </div>

      {forms.map((data) => {
        return (
          <div className="text-white border-2">
            <form action="">
              <h1>{data.event}</h1>
              <h1>{data.heading}</h1>
              <h1>{data.subtitle}</h1>
              <h1>{data.instructions}</h1>
              {fieldList.map((field) => {
                return (
                  <div className="text-white">
                    <div>
                      <label htmlFor="">Name</label>
                      <input className='text-black' type="text" placeholder={field.value} />
                    </div>
                    <div></div>
                    <div></div>
                    <label htmlFor="">{field.name}</label>
                    <input className='text-black' type={field.type} name={field.name} placeholder={field.value} />
                  </div>
                )
              })}
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default Forms