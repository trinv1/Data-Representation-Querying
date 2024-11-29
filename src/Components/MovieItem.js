
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const MovieItem = (props) => { {/*MovieItem component*/}

{/* logging props to console whenever component mounts or updates */}
{/*"[props.myMovies]" only runs effect when array changes*/}
useEffect( 

    ()=>{
        console.log("Movies:", props.myMovie);
    },[props.myMovie]    
)


    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
            .then(() => {
                props.Reload(); // Refresh the movie list after deletion
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    };



return(
    <div>
        <Card>
            <Card.Header>{props.myMovie.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img src = {props.myMovie.poster} alt ={props.myMovie.title} />
                    <footer>{props.myMovie.year}</footer>
                </blockquote>
            </Card.Body>
            <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>{/*Delete movie button*/}
        </Card>
    </div>
);
};



export default MovieItem;