import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    //getting our movie data from the redux store
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
    
     // Handle the case when movies are empty or undefined
     if (!movies || movies.length === 0) return null;

    const mainMovie=movies[0];
    // console.log(mainMovie)

    const {original_title,overview,id}=mainMovie

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer