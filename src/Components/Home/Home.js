import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { API_KEY, imgUrl } from '../../Constants/Constants'
import { action , comedy, horror, orginals, romance } from '../../Constants/url'
import Slider from '../Slider/Slider'
import './Home.css'

function Home() {

  const [banner, setBanner] = useState()

  useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US'`).then((data)=>{
    // console.log(data.data.results)
    setBanner(data.data.results[Math.floor((Math.random() * 3) + 1)-1])
  })
   
  }, [])
  
  return ( 
    <div>
        <div style={{ backgroundImage: `url(${banner ? imgUrl+banner.backdrop_path : ""})`}} className='homebody'>

            <div className='textitem'>
                <h2 className='title'>{banner ?  (banner.original_title ?banner.original_title :banner.original_name) : ""}</h2>
                <div className='mx-4'>
                <button className='btn me-2'><i className="fa-solid fa-play"></i> Play Now</button>
                <button className='btn'><i className="fa-solid fa-plus"></i> My List</button>
                </div>
                <div className='descript mt-3'>
                   <strong className='title2'>Watch {banner ?  (banner.original_title ?banner.original_title :banner.original_name) : ""} Now</strong>
                    <p className='mt-2'>{banner ?  banner.overview : ""}</p>
                </div>
                
            </div>
           
        </div>


        <div className='remaningbody'>
              <Slider url={orginals} title="Netflix Orginals" />
              <Slider className="mx-2" url={action} title="Action" isSmall/>
              <Slider className="mx-2" url={comedy} title="Comedy" isSmall/>
              <Slider className="mx-2" url={romance} title="Romance" isSmall/>
              <Slider className="mx-2" url={horror} title="Horror" isSmall/>




              
        </div>






    </div>


  )
}

export default Home