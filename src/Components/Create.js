//Create.js is a form that allows a user to input a movie title and submit it

import { useState } from "react";

//sending data to api

function Create() { //create function       //state variable is allowed to be declared inside a function
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');//state variable to manage input fields
    const [poster, setPoster] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
    // Prevent the default form submission behavior (which would refresh the page) when the form is submitted.

      console.log(title);
      console.log(year);
      console.log(poster);//Logging all to console
    }
  
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