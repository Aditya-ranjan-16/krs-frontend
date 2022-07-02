import React, {useState, useRef} from 'react'
import cross from '../../public/cross.png'

function Forms() {

    const checkName = useRef(null)
    const checkType = useRef(null)
    const checkDefault = useRef(null)

    const field = [
        {
            name: "Name",
            type: "text",
            value: "",
        },
        {
            name: "Roll Number",
            type: "number",
            value: ""
        },
        {
            name: "Email",
            type: "email",
            value: ""
        },
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
    const [form, setForm] = useState({event: "", typeofform: "", heading: "", subtitle: "", instructions: ""})
  
    const [fieldList, setfieldList] = useState(field)
    const [newfieldlist, setNewfieldList] = useState({name: "", type: "", value: "" })


    //  create form
  const handleClick = (e) => {
    e.preventDefault();
    setForms(forms.concat(form));
    setForm({event: "", typeofform: "", heading: "", subtitle: "", instructions: ""});

    setfieldList(newfieldlist.concat(fieldList));
    setNewfieldList({name: "", type: "", value: "" })
  
  };
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setNewfieldList({ ...newfieldlist, [e.target.name]: e.target.value});
    setNewfieldList({name: [e.target.name], value: [e.target.value], type: [e.target.type]})
  };


  // field

    const handleAddField = () => {
        if(checkName.current.value !== "" && checkType.current.value !== "select"){  //checking if fields are empty
            setfieldList([...fieldList, {
                name: "",
                type: "",
                value: ""
            }])
        }else{
            alert("please fill all the name and type inputs")
        }
    }

    const handleRemoveField = (index) => {
        const newField = [...fieldList];
        newField.splice(index, 1);
        setfieldList(newField)
        console.log(newField)
    }

  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
        <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Select Event</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="event"id="">
              <option selected disabled hidden>Select</option>
              <option value={form.event} onChange={onChange} >Pradarshana</option>
              <option value={form.event} onChange={onChange} >Robowar</option>
              <option value={form.event} onChange={onChange} >Drone Workshop</option>
              <option value={form.event} onChange={onChange} >IoT Bootcamp</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Type of Form</h2>
            <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" name="typeofform" id="">
              <option selected disabled hidden>Select</option>
              <option value={form.typeofform} onChange={onChange} >Registration</option>
              <option value={form.typeofform} onChange={onChange} >Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter heading" type="text" name='heading' value={form.heading} onChange={onChange} />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter subtitle" type="text" name='subtitle' value={form.subtitle} onChange={onChange}/>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
            <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder="Enter instructions" type="text" name='instructions' value={form.instructions} onChange={onChange}/>
          </div>
        </div>

        <h1 className="p-2 text-2xl text-white">Add Fields</h1>
        <div className="px-5">
            <div className="px-5 grid grid-cols-4 gap-4 py-2">
                <label className='text-white text-xl text-center' htmlFor="">Name</label>
                <label className='text-white text-xl text-center' htmlFor="">Type</label>
                <label className='text-white text-xl text-center' htmlFor="">Value</label>
            </div>

            {fieldList.map((list, index) => {
                return (
                    <div key={index} className="px-5 grid grid-cols-3 gap-4 py-2">
                        <input ref={checkName} className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="name" value={newfieldlist} onChange={onChange} id="" />
                        <select className="text-lg w-full py-0.5 px-1 mx-1 rounded" ref={checkType} name="type" id="">
                          <option value="select" selected disabled hidden>Select</option>
                          <option name='type' value={list.type} onChange={onChange} >text</option>
                          <option name='type' value={list.type} onChange={onChange}>number</option>
                          <option name='type' value={list.type} onChange={onChange} >email</option>
                        </select>
                        <div className='flex'>
                        <input ref={checkDefault} className="text-lg w-full py-0.5 px-1 mx-1 rounded" type="text" name="value" value={list.value} onChange={onChange} id="" />
                        {index > 2 && (
                            <button className="text-xl  px-2 mx-1 rounded-lg text-white" onClick={() => handleRemoveField(index)}><img className='w-6' src={cross} alt="remove" /></button>
                        )}
                        </div>
                    </div>
                    
                )
            })}
        </div>

        <button className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={handleAddField}>+ Add field</button>
        
        <br /><button type="submit" className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white" onClick={handleClick} >Create Form</button>

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
                console.log(fieldList)
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