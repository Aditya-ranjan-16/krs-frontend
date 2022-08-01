
function Radio({initial,name,change,values}) {
console.log("val-=",initial)
  const options=values.split(',')
    return (
      <div className="text-white">
        {options.map((e,i)=>(
          <>
          {initial==e &&  <input key={i} type="radio" defaultValue={initial==""?null:initial} value={e} onChange={change} id={e} name={name} checked/> }
          {initial!=e &&  <input key={i} type="radio" defaultValue={initial==""?null:initial} value={e} onChange={change} id={e} name={name} /> }
         <label for={e}>{e}</label>
         <br></br>
          </>
         ))}
       
          
      </div>
    );
  }

  export default Radio;