const Movies = (props) => { {/*Movies component*/}

    return (
      <div>
       My movies component
       {console.log(props.myMovies)} {/* Logging the movies passed in props for debugging purposes */}
      </div>
    );
};
  
  export default Movies;