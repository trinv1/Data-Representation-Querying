
import React from 'react';
import { useParams } from 'react-router-dom';//A hook from react-router-dom to extract dynamic route parameters
import { useState, useEffect } from 'react';
import axios from 'axios';//library from making http requests to backend
import { useNavigate } from "react-router-dom";//A hook from react-router-dom to programmatically navigate between routes.

//Manages state of movies title, release year and poster URL
export default function Edit(props) {
  let { id } = useParams();//going to take id and find in database
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const navigate = useNavigate();

//Runs when id changes, sends get request to fetch movies details from server
  useEffect(() => {
    axios.get('http://localhost:4000/api/movie/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

//Triggers when user submits form
const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { id, title, year, poster };
    
    //A new movie object (newMovie) is created with the current 
    //states and sent to the backend using an HTTP PUT request to update the movie on the server.
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');//User brought back to /read route using navigate
        });
}

//These forms allow properties of movie to be edited
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Edit Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}