import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
       <div className='-mt-64 relative z-10 pl-12'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>

       </div>

      {/* 
      movielist-popular
      movielist-now playing
      movielist-trending
      movielist-horror */}
    </div>
  )
}

export default SecondaryContainer