//Create.js is a form that allows a user to input a movie title and submit it

import { useState } from "react";

//sending data to api

function Create() { //create function       //state variable allows you to declare a state variable inside a function
    const [title, setTitle] = useState('');//state variable to manage title input field
  
    const handleSubmit = (e) => {
      e.preventDefault();
    // Prevent the default form submission behavior (which would refresh the page) when the form is submitted.

      console.log(title);
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
          <input type="submit" value="Add Movie" />
        </form>
      </div>
    );
  }
  
  export default Create;