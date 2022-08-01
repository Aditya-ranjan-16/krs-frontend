

function Dropdown({initial,name,change,values}) {

  const options=values.split(',')

 console.log(initial)
    return (
      <div >
        <select
         onChange={change} 
         name={name}
         defaultValue={initial}
         className="text-lg w-full py-0.5 px-1 mx-[-20px] rounded bg-transparent text-white outline-none"
        >
       <option  className="bg-zinc-800" value={"Select"} hidden >Select</option> 
        {options.map((e,i)=>(
        
        <option key={i} className="bg-zinc-800" value={e} >{e}</option> 
        
         ))}
          </select>
          
      </div>
    );
  }

  export default Dropdown;