import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies=()=>{
 //fetch data from tmdb api and update the store
 const dispatch=useDispatch()
 
 const popularMovies=useSelector(store=>store.movies.popularMovies)


 //making a api call -> get it from tmdb
 const getPopularMovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

   const json =await data.json()
  //  console.log(json)
   dispatch(addPopularMovies(json.results))
 }

 useEffect(()=>{
  if (popularMovies.length === 0) { // ✅ Correct check
    getPopularMovies();
  }

 },[])
}


export default usePopularMovies



