
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieItem = (props) => { {/*MovieItem component*/}

{/* logging props to console whenever component mounts or updates */}
{/*"[props.myMovies]" only runs effect when array changes*/}
useEffect( 

    ()=>{
        console.log("Movies:", props.myMovies);
    },[props.myMovies]    
)

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
        </Card>
    </div>
);

};

export default MovieItem;