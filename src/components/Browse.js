import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import {useSelector} from "react-redux";


const Browse = () => {
  const showGPTSearchView = useSelector((store)=> store.gpt.showGPTSearch)

    useNowPlayingMovies();
    usePopularMovies();

    //Fetch data from TMDB API and update store

    return (
        <div>
            <Header/>
            {showGPTSearchView?(<GPTSearch/>):
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>
            
            }

             

        </div>

        /*

          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MoviesList * n
              - Cards * n
        
        
        
        
        */
    );
};

export default Browse;