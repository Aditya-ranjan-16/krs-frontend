import React, { useState, useEffect, useRef } from 'react'
import cross from '../../public/cross.png'

function Forms() {
  const del = useRef(null)

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
  const [showFInalData, setshowFInalData] = useState([])

  const [formData, setformData] = useState({
    event: "", typeofform: "", heading: "", subtitle: "", instructions: "", Namevalue: "", Rollvalue: "", Emailvalue: ""
  });
  const [addFeild, setAddFeild] = useState([]);
  const [curFeild, setCurFeild] = useState({ name: "", type: "", value: "" })
  const [show, set] = useState(false);
  const [showE, setE] = useState("");
  const [showE2, setE2] = useState("");

  const createForm = () => {
    const { event, typeofform, heading, subtitle, instructions, Namevalue, Rollvalue, Emailvalue } = formData
    if (event !== "" && typeofform !== "" && heading !== "" && subtitle !== "" && instructions !== "") {
      var final = {
        event,
        typeofform,
        heading,
        subtitle,
        instructions,
        fields: [
          {
            name: "Name",
            type: "text",
            value: Namevalue
          }, {
            name: "Roll Number",
            type: "number",
            value: Rollvalue
          }, {
            name: "Email",
            type: "email",
            value: Emailvalue
          }
        ]
      }

      final.fields = final.fields.concat(addFeild)
      setshowFInalData(showFInalData.concat(final))

      setformData({
        event: "", typeofform: "", heading: "", subtitle: "", instructions: "", Namevalue: "", Rollvalue: "", Emailvalue: ""
      });
      setAddFeild([]);
      setE("");
    } else {
      setE("Please fill all the fields");
    }
  }

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const onChange2 = (e) => {
    setCurFeild({ ...curFeild, [e.target.name]: e.target.value });
  }

  const addFeildCheck = (e) => {
    if (show === true) {
      del.current.style.display = "flex"
      set(false)
      return;
    }

    const { name, type, value } = curFeild

    var arr = { name, type, value }
    if (name !== "" && type !== "") {
      setAddFeild(addFeild.concat(arr))
      setCurFeild({ name: "", type: "", value: "" })
      setE2("");
    } else {
      setE2("Please fill the name and type field");
      console.log(show)
    }
  }

  const currDelete = () => {
    set(true)
    del.current.style.display = "none"
  }

  const removeFeild = (name, type) => {
    setAddFeild(addFeild.filter((el) => el.type !== type || el.name !== name));
  }

  useEffect(() => { console.log(showFInalData) }, [showFInalData])

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Select Event</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="event" onChange={onChange}>
              <option selected disabled hidden>Select</option>
              <option value="Pradarshana">Pradarshana</option>
              <option value="Robowar">Robowar</option>
              <option value="Drone Workshop">Drone Workshop</option>
              <option value="IoT Bootcamp">IoT Bootcamp</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Type of Form</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="typeofform" onChange={onChange}>
              <option selected disabled hidden>Select</option>
              <option value="Registration">Registration</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter heading" type="text" name='heading' value={formData.heading} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter subtitle" type="text" name='subtitle' value={formData.subtitle} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter instructions" type="text" name='instructions' value={formData.instructions} onChange={onChange} />
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
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Namevalue" onChange={onChange} />
          </div>

          {/* Roll Number Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Roll Number" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" value="text">
              <option value="number" selected>number</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Rollvalue" onChange={onChange} />
          </div>

          {/* Email Inp Feild */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2">
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value="Email" />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" value="text">
              <option value="email" selected>email</option>
            </select>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="Emailvalue" onChange={onChange} />
          </div>

          {/* Add Feilds With Values */}
          {addFeild ? <div>
            {addFeild.map((value, key) => {
              return (
                <div key={key} className="px-5 grid grid-cols-3 gap-4 py-2">
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" value={value.name} />
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" value={value.type} />
                  <div className='flex'>
                    <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" value={value.value} />
                    <button className="text-xl  px-2 mx-1 rounded-lg text-white"><img className='w-6' src={cross} alt="remove" onClick={() => removeFeild(value.name, value.type)} /></button>
                  </div>
                </div>
              )
            })}
          </div> : ""}

          {/* For More Feilds */}
          <div className="px-5 grid grid-cols-3 gap-4 py-2" ref={del}>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value={curFeild.name} onChange={onChange2} />
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="type" onChange={onChange2}>
              <option value="select" selected disabled hidden>Select</option>
              <option name='type' value="text">text</option>
              <option name='type' value="number">number</option>
              <option name='type' value="email">email</option>
            </select>
            <div className='flex'>
              <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="value" value={curFeild.value} onChange={onChange2} />
              <button className="text-xl  px-2 mx-1 rounded-lg text-white"><img className='w-6' src={cross} alt="remove" onClick={currDelete} /></button>
            </div>
          </div>


          {/* For More Feilds */}
          {/* {fieldList.map((list, index) => {
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
                  <button className="text-xl  px-2 mx-1 rounded-lg text-white"><img className='w-6' src={cross} alt="remove" /></button>
                </div>
              </div>
            )
          })} */}
        </div>
        <br />
        {showE2 ? <p className="alertText">{showE2}</p> : ""}
        <button className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={addFeildCheck}>+ Add field</button>
        <br />
        {showE ? <p className="alertText">{showE}</p> : ""}
        <button type="submit" className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={createForm}>Create Form</button>
      </div>

      {forms.map((data) => {
        return (
          <div className="text-white border-2">
            <form action="">
              <h1>{data.event}</h1>
              <h1>{data.heading}</h1>
              <h1>{data.subtitle}</h1>
              <h1>{data.instructions}</h1>
              {/* {fieldList.map((field) => {
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
              })} */}
            </form>
          </div>
        )
      })}

      {showFInalData ? <div>
        {showFInalData.map((value, key) => {
          return (
            <div key={key} className="text-white border-2">
              <h1 className="p-2 text-3xl text-white text-center">{value.event}</h1>
              <div className="grid grid-cols-2">
                <h1 className='text-xl text-center my-2'>{value.heading}</h1>
                <h1 className='text-xl text-center my-2'>{value.subtitle}</h1>
              </div>
              <h1 className='text-xl text-center my-2'>{value.instructions}</h1>
              {value.fields ?
                <div>
                  {value.fields.map((val, key) => {
                    return (
                      <div key={key} className="my-5 px-10">
                        <label className='text-xl text-center' htmlFor="">{val.name}</label>
                        <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" type={val.type} placeholder={val.value} />
                      </div>
                    )
                  })}
                </div> : ""}
            </div>
          )
        })}
      </div> : ""}
    </div>
  )
}

export default Forms