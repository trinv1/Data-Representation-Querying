
import { useEffect } from "react";

const MovieItem = (props) => { {/*MovieItem component*/}

{/* logging props to console whenever component mounts of updates */}
useEffect( 
    ()=>{
        console.log("Movies:", props.myMovies);
    },[]
)

return(
    <div>
        <h3>{props.myMovie.Title}</h3>{/*Displaying the movie title passed in as prop*/}
        <h3>{props.myMovie.Year}</h3>
        <img src = {props.myMovie.Poster}></img>
    </div>
);

};

export default MovieItem;