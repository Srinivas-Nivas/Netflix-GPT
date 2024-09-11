import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";


const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    // This is also known as early return
    if(!movies) return;

    const MainMovie = movies[0];
    console.log(MainMovie);

    const {original_title, overview, id} = MainMovie;
    

    return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id}/>
    </div>
    )
};

export default MainContainer;