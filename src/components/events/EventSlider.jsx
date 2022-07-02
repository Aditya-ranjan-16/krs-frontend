import './events.css'
import {useRef,useLayoutEffect} from 'react'

let count_event=0;
function EventSlider(){
       const posterRef=[useRef(1),useRef(2),useRef(3)]
   
   const changestate=()=>{
  
    if(count_event==0){
       
        posterRef[0].current.style.transform="translatex(40%) scale(.8)";
        posterRef[0].current.style.opacity=.6;
        posterRef[0].current.style.zIndex=0;

        posterRef[1].current.style.transform="translatex(-40%) scale(.8)";
        posterRef[1].current.style.opacity=.6;
        posterRef[1].current.style.zIndex=0;

        posterRef[2].current.style.transform="translatex(0%) scale(1)";
        posterRef[2].current.style.opacity=1;
        posterRef[2].current.style.zIndex=1;
        console.log(count_event)
        count_event=1;
    }
    else if(count_event==1){
        posterRef[1].current.style.transform="translatex(0%) scale(1)";
        posterRef[1].current.style.opacity=1;
        posterRef[1].current.style.zIndex=1;

        posterRef[2].current.style.transform="translatex(40%) scale(.8)";
        posterRef[2].current.style.opacity=.6;
        posterRef[2].current.style.zIndex=0;

        posterRef[0].current.style.transform="translatex(-40%) scale(.8)";
        posterRef[0].current.style.opacity=.6;
        posterRef[0].current.style.zIndex=0;

      
        count_event=2;
    }
    else if(count_event==2){
        posterRef[1].current.style.transform="translatex(40%) scale(.8)";
        posterRef[1].current.style.opacity=.6;
        posterRef[1].current.style.zIndex=0;

        posterRef[2].current.style.transform="translatex(-40%) scale(.8)";
        posterRef[2].current.style.opacity=.6;
        posterRef[2].current.style.zIndex=0;

        posterRef[0].current.style.transform="translatex(0%) scale(1)";
        posterRef[0].current.style.opacity=1;
        posterRef[0].current.style.zIndex=1;
        count_event=0;
    }
   
    
   }
   useLayoutEffect(() => {
    const slideInterval=  setInterval(() => {
   
        changestate();
        
      }, 6000);

    return ()=>{clearInterval(slideInterval) }
    }, []);
    return(
        <div class="event_container" >
     
      <div class="event_cards">
        <label  ref={posterRef[0]} class="event_card poster-1" for="item-1" >
          <img class="event_img" src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song"/>
        </label>
        <label  ref={posterRef[1]} class="event_card poster-2" for="item-2" >
          <img class="event_img" src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song"/>
        </label>
        <label  ref={posterRef[2]}  class="event_card poster-3" for="item-3" >
          <img class="event_img" src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
        </label>
      </div>
      
    </div>
    )
}

export default EventSlider;