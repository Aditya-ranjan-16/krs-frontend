
function Email() {
    return (
      <div>
        <input
          type="email"
          placeholder="name@example.com"
          className="bg-transparent"
          style={{
            width: "100%",
            outline: "none",
            color: "white",
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.event
            }
          }}
        ></input>
      </div>
    );
  }

  export default Email;