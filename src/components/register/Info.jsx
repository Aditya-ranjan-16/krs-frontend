
function Info() {
    return (
      <div className="xl:w-[30%] md:w-[100%] sm:w-[100%] lg:w-[30%] my-5 mx-10">
        <text className="text-yellow-500 xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl font-bold ml-7 text-center">
          Pradarshana 1.0
        </text>
  
        <div className="ml-5 mt-10">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <text className="text-white ml-5">
              {" "}
              Electronics Auditorium,Campus 12
            </text>
          </div>
  
          <br></br>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
              />
            </svg>
            <text className="text-white ml-5"> 23 July,2022 (2pm-4pm)</text>
          </div>
        </div>
        <br></br>
        <div className="ml-5">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique molestias corporis incidunt rerum excepturi voluptatum
            laudantium quaerat vitae !
          </p>
        </div>
      </div>
    );
  }
  
  export default Info;
  