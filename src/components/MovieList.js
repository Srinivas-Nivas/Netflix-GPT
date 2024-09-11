import MovieCard from "./MovieCard";
const MovieList = ({title, movies}) => {


   


    return (
    <div className="py-6 ">
          <h1 className="px-3 text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          
            <div className="flex">
            {movies?.map((movie) =>
               (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
            </div>
        </div>

    </div>
    );
};

export default MovieList;
