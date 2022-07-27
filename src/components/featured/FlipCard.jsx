function FlipCard(props) {
  return (
    <div class="flip-card" style={{width:`${props.width}`}}>
      <div class="flip-card-inner">
        <div class="flip-card-front rounded-2xl bg-cover " style={{backgroundImage:`url(${props.img})`}}>
         
          <div className="text-3xl text-yellow-500 absolute top-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10">{props.title}</div>
        </div>
        <div class="flip-card-back rounded-2xl text-white bg-black">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
