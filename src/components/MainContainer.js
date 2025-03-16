import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    //getting our movie data from the redux store

    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
    
    const storeData = useSelector(store => store);
console.log("Full Redux Store:", storeData);
     // Handle the case when movies are empty or undefined
     if (!movies || movies.length === 0) return null;

    const mainMovie=movies[0];
    // console.log(mainMovie)

    const {original_title,overview,id}=mainMovie

  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer