import React, { useEffect, useState } from "react";
function PictureList(props){
    var [pics,setPics]=useState([])
    const [clickedPics, setClickedPics] = useState([]);
    useEffect(() => {
        async function fetchpics() {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=KxTsQmWS65Vl00NLmteVIKz2qyZY7M0Y_AnR3gcbBb8');
            const json = await response.json();

            setPics(json)
        }
        fetchpics()


      },[]);

      var checkClick=(id)=>{
            const[score,setScore]=props.setScore
            // remove from ClickedPics
            if(clickedPics.includes(id)){
                setScore(0)
            }
            else{
                var prev=clickedPics
                prev.push(id)
                setClickedPics(prev)
                
                
                setScore(score+1)
                // props.setScore(props.score+1)
            }
      }
      function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return (array) 
      }
      shuffleArray(pics)
      
    
    return (
        <ul>
       {pics.map(pic => (
        <img key={pic.id} height={200} src={pic.urls.small} onClick={()=>checkClick(pic.id)}></img>  
       ))
       }
   </ul>
  
    );
}

export default PictureList 
