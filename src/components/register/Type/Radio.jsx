
function Radio() {
    return (
      <div className="text-white">
          <input type="radio" id="Email" name="4" /> 
        <label for="Email">Email</label>
        <br></br>
          <input type="radio" id="friends" name="4" /> 
        <label for="friends">Friends</label>
        <br></br>  <input type="radio" id="Social media" name="4" /> 
        <label for="Social media">Social media</label>
      </div>
    );
  }

  export default Radio;