import useMoviesTrailer from "../hooks/useMoviesTrailer"
import { useSelector } from 'react-redux'
const VideoBackground = ({movieID}) => {

   //fetch trailer video and updating the store with the trailer video data
   
   const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
   
  
   //custom hook to fetch the trailer video
  useMoviesTrailer(movieID)

  return (
    <div>
         <iframe className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
          title="YouTube video player" 
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          
          ></iframe>
    </div>
  )
}

export default VideoBackground