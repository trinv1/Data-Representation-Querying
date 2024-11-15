//Create.js is a form that allows a user to input movie info and submit it

import axios from "axios";
import { useState } from "react";

//sending data to api

function Create() { //create function       //state variable is allowed to be declared inside a function
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');//state variable to manage input fields
    const [poster, setPoster] = useState('');

    //collects form input, creates a movie object, and sends it to the backend API.
    const handleSubmit = (e) => { 
      e.preventDefault();
      
      console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
      
      const movie = {
        title: title,
        year: year,
        poster: poster
      }; /////
      
      axios.post('http://localhost:4000/api/movies', movie)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        {/* A form element that listens for submission with the handleSubmit function */}
          <div className="form-group">
            <label>Add Movie Title: </label>
            <input type="text" //capturnig input & input control will submit data for me
              className="form-control"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}//updating title everytime user hits a key stroke on input control
            // This onChange event triggers whenever the user types in the input field.
            // It calls setTitle with the new input value, updating the 'title' state in real-time.
           />
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add Movie Year: </label>
            <input type="text" //capturing movie year input
              className="form-control"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
           />
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add Movie Poster: </label>
            <input type="text" //capturing movie poster input
              className="form-control"
              value={poster}
              onChange={(e) => { setPoster(e.target.value) }}
           />
          </div>
          <input type="submit" value="Add Movie" />
        </form>
      </div>
    );
  }
  
  export default Create;