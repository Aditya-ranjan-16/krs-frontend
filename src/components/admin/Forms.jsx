import React, { useState, useEffect, useRef } from 'react'
import cross from '../../public/cross.png'

function Forms() {

  const checkName = useRef(null)
  const checkType = useRef(null)
  const checkDefault = useRef(null)

  const field = [
    {
      name: "",
      type: "",
      value: ""
    },
  ]

  const formdata = [
    {
      event: "pradarshana",
      typeofform: "registration",
      heading: "pra",
      subtitle: "darshana",
      instructions: "1.0",
    },
  ]

  const [forms, setForms] = useState(formdata);
  const [fieldList, setfieldList] = useState(field);

  const [form, setForm] = useState({ event: "", typeofform: "", heading: "", subtitle: "", instructions: "" })
  const [newfieldlist, setNewfieldList] = useState({ name: "", type: "", value: "" })


  //  create form
  const handleClick = (e) => {
    e.preventDefault();

    const { event, typeofform, heading, subtitle, instructions } = form;
    if (event !== "" && typeofform !== "" && heading !== "" && subtitle !== "" && instructions !== "") {
      setForms(forms.concat(form));
      setForm({ event: "", typeofform: "", heading: "", subtitle: "", instructions: "" });

      setfieldList(newfieldlist.concat(fieldList));
      setNewfieldList({ name: "", type: "", value: "" })
    }
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setNewfieldList({ ...newfieldlist, [e.target.name]: e.target.value });
  };

  // field
  const handleAddField = () => {
    const { name, type, value } = newfieldlist

    //checking if fields are empty
    if (name !== "" && type !== "") {
      let AddField = {
        name, type, value
      }
      setfieldList(fieldList.concat(AddField))
      // setfieldList([...fieldList, {
      //   name: "",
      //   type: "",
      //   value: ""
      // }])
      setNewfieldList({
        name: "",
        type: "",
        value: ""
      })
    } else {
      alert("please fill all the name and type inputs")
    }
  }

  const handleRemoveField = (index) => {
    console.log(index)
    var newField = [...fieldList];

    console.log(newField)

    // newField.splice(index, 1);
    // setfieldList(newField)
  }

  const preDefinedFeilds = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name + `\t` + value);
  }

  useEffect(() => {
    console.log(fieldList)
  }, [fieldList])

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Select Event</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="event" id="" onChange={onChange}>
              <option selected disabled hidden>Select</option>
              <option value="Pradarshana">Pradarshana</option>
              <option value="Robowar">Robowar</option>
              <option value="Drone Workshop">Drone Workshop</option>
              <option value="IoT Bootcamp">IoT Bootcamp</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Type of Form</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="typeofform" id="" onChange={onChange}>
              <option selected disabled hidden>Select</option>
              <option value="Registration">Registration</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter heading" type="text" name='heading' value={form.heading} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter subtitle" type="text" name='subtitle' value={form.subtitle} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter instructions" type="text" name='instructions' value={form.instructions} onChange={onChange} />
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
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" id="" value="text">
              <option value="text" selected>text</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Namevalue" onChange={preDefinedFeilds} />
          </div>

          {/* Roll Number Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Roll Number" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" id="" value="text">
              <option value="number" selected>number</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Rollvalue" onChange={preDefinedFeilds} />
          </div>

          {/* Email Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Email" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" id="" value="text">
              <option value="email" selected>email</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Emailvalue" onChange={preDefinedFeilds} />
          </div>

          {/* For More Feilds */}
          {fieldList.map((list, index) => {
            return (
              <div key={index} className="px-5 grid grid-cols-3 gap-4 py-2">
                <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" onChange={onChange2} id="" />
                <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" id="" onChange={onChange2}>
                  <option value="select" selected disabled hidden>Select</option>
                  <option name='type' value="text">text</option>
                  <option name='type' value="number">number</option>
                  <option name='type' value="email">email</option>
                </select>
                <div className='flex'>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="value" onChange={onChange2} id="" />
                  <button className="text-xl  px-2 mx-1 rounded-lg text-white" onClick={() => handleRemoveField(index)}><img className='w-6' src={cross} alt="remove" /></button>
                </div>
              </div>

            )
          })}
        </div>

        <button className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={handleAddField}>+ Add field</button>
        <br />
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
                    <label htmlFor="">{field.name}</label>
                    <input className='text-black' type={field.type} name={field.name} placeholder={field.value} id="" />
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