
function Radio({name,change,values}) {

  const options=values.split(',')
    return (
      <div className="text-white">
        {options.map((e,i)=>(
          <>
        <input key={i} type="radio"  onChange={change} id={e} name={name}/> 
         <label for={e}>{e}</label>
         <br></br>
          </>
         ))}
       
          
      </div>
    );
  }

  export default Radio;