import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

    useNowPlayingMovies();

    //Fetch data from TMDB API and update store

    return (
        <div>
            <Header/>
            
             <MainContainer/>
             <SecondaryContainer/>

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