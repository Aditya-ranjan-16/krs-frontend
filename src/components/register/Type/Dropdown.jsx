
function Dropdown({name,change,values}) {

  const options=values.split(',')
    return (
      <div className="text-white">
        <select
         onChange={change} 
         name={name}
        
        >
     
        {options.map((e,i)=>(
          <>
        <option key={i}  value={e} >e</option> 
          </>
         ))}
          </select>
          
      </div>
    );
  }

  export default Dropdown;