import React, { useEffect, useState } from 'react';
import './Slider.css';
import axios from 'axios';
import { API_KEY, imgUrl } from '../../Constants/Constants';
import Youtube from 'react-youtube';


function Slider(props) {

  const [movie, setmovie] = useState([])
  const [key , setKey] = useState('')


 const getmovie=(id)=>{
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  .then((data)=>{
    if(data.data.results.length!==0){
    setKey(data.data.results[0])
  }else{
    console.log("Empty")
  }
  })

  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3${props.url}`).then(data=>{
      console.log(data.data.results)
      setmovie(data.data.results)
    })
  
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  
  return (
    <div>

        <div className='sliderr22 row'>
          <h3 className='heading2'>{props.title}</h3>
            <div className='poster'>
              {movie.map((itm,k)=>
              <div class="container22">
               <img className={ props.isSmall ?'smallimg image':'poster22 image'} src={`${imgUrl+itm.backdrop_path}`} alt=""/>
                  <div class="middle">
                  <div onClick={()=> {getmovie(itm.id)}} class="text"><i className="fa-solid fa-play"></i> Play</div>
                 </div>
               </div>
              
              )}
            </div>
                { key && <Youtube videoId={key.key} opts={opts}/>}
        </div>

    </div>
  )
}

export default Slider