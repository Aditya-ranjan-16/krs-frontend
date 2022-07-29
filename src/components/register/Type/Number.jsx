import React from 'react'

function Number() {
  return (
    <div>
        <input
          type="number"
          placeholder="Enter number"
          className="bg-transparent"
          style={{
            width: "100%",
            outline: "none",
            color: "white",
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.event
              // console.log("event")
            }
          }}
        ></input>
    </div>
  )
}

export default Number