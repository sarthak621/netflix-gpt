
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
 //calling the custom hook
 useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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