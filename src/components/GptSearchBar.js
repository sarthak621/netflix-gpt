import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai'
import genAI from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  
  const langKey=useSelector(store=>store.config.lang)
  const searchText=useRef(null)
  const dispatch=useDispatch()

  //seach movie in tmdb 
  const searchMovieTMDB=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)

      const json=await data.json()

      return json.results
  }

  const handleGptSearchKey = async () => {
    console.log(searchText.current.value);

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. 
                      Only give me names of 5 movies, comma-separated like the example result given ahead. 
                      Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

    try {
      // Gemini AI API call
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await model.generateContent(gptQuery);
      const gptResults = await response.response.text();

      console.log( gptResults);

      const gptMovies=gptResults.split(",") //gives array of movies
      console.log(gptMovies)

      //for each movie i will search tmdb api

     const promiseArray= gptMovies.map(movie=>searchMovieTMDB(movie))
     //[Promise,Promise,Promise,Promise,Promise]

     const tmdbResults=await Promise.all(promiseArray)  //resolves all the promises and get us the result
     console.log(tmdbResults)

     dispatch(addGptMovieResult({movieNames:gptMovies
      ,movieResults:tmdbResults}))
      
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }


  };
  
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
     
        <form className='w-full md:w-1/2 grid grid-cols-12 bg-black' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].GptSearchPlaceHolder}/>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={handleGptSearchKey}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar