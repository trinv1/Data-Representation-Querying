const MovieItem = (props) => { {/*MovieItem component*/}

return(
    <div>
        <h3>{props.myMovie.Title}</h3>{/*Displaying the movie title passed in as prop*/}
    </div>
);

};

export default MovieItem;