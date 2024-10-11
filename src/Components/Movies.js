import MovieItem from "./MovieItem";{/*Importing movie item*/}

const Movies = (props) => { {/*Movies component*/}
    
{/*Mapping through the array of movies from props.myMovies*/}
{/*and rendering a MovieItem component for each movie*/}
return props.myMovies.map( 
        (movie)=>{
            return <MovieItem myMovie={movie}  key={movie.imdbID}/>
        }
    );
};
  
  export default Movies;