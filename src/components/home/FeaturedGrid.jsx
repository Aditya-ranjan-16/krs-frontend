import watch from "../../public/watch.jpg";

function FG({ht}) {
  return (
    <div>
      <div class="relative mr-4 box-border rounded-lg">
        <img src={watch} style={{ width: "520px", height:`${ht}` }} className="w-full " />
        <h2 className="absolute bottom-14 ml-3 font-WorkSans font-bold text-[32px] text-white">
          The Watch
        </h2>
        <button class="absolute bottom-0 bg-amber-400 flex text-black p-2 rounded-full hover:bg-amber-500 m-2">
         <a href="#"> Read more</a>
          <svg
            class="ml-2 -mr-1 my-1.5 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FG;
