//read.js
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies"; {/*importing movies*/}

const Read = () => { {/*Read component*/}

//use state used to store data returned from API and manage state of application
  const[movies, setMovies] = useState([]);
  
 
  useEffect(
    ()=>{//using axios to talk on web for me
      axios.get('http://localhost:4000/api/movies')//sending http request and run in background not causing app to freeze (asynchronous)
      .then((response)=>{//got response back from http request
        console.log(response.data);//logging to console
        setMovies(response.data.myMovies)//pulling back in objects from json movies
      })
      .catch()
    },[]//empty array to stop firing every time and only fire when things are updated
  );

  //The Reload function fetches the updated movie list from the server and updates the state with the new data
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            setMovies(response.data.myMovies);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
  };

  //The useEffect hook calls the Reload function once when the component is being rendered and added to the DOM
  useEffect(() => {
      Reload();
  }, []);


  return (
    <div>
     <Movies myMovies={movies} ReloadData={Reload}/> {/* Rendering the Movies component and passing 'data' as the 'myMovies' prop */}
    </div>
  );
  };
  
  export default Read;