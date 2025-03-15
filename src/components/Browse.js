
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

 //calling the custom hook
 useNowPlayingMovies();

 usePopularMovies();

 useTopRatedMovies();

 useUpcomingMovies();
  
  return (
    <div>
      <Header/>
      {
        showGptSearch?<GptSearch/> :
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      }
    
      {/* 
        Main Container
          -video background
          -video title
        Secondary Container
           -MovieList * n
             -cards*n
       */}
    </div>
  )
}

export default Browse