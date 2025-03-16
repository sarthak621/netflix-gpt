import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"

const useNowPlayingMovies=()=>{
 //fetch data from tmdb api and update the store
 const dispatch=useDispatch()

 const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)

 //making a api call -> get it from tmdb
 const getNowPlayingMovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

   const json =await data.json()
  //  console.log(json)
   dispatch(addNowPlayingMovies(json.results))
 }

 useEffect(()=>{
  //it will going to save to call api's again and again after rendering
  if (nowPlayingMovies.length === 0) { // ✅ Correct check
    getNowPlayingMovies();
  }


 },[])
}


export default useNowPlayingMovies



