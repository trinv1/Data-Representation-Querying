//server.js
const express = require('express'); //importing express module
const app = express();//creating an express app instance
const port = 4000;//port where server will listen

//Importing cors middleware
//Allows api to accept requests from any domain
const cors = require('cors');//importing cors middleware
app.use(cors());

//Manually defines allowed methods (GET, POST, etc.)
//and headers (Content-Type, Accept, etc.) for incoming requests.
//Lets front end communicate with backend
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Middleware to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');//connecting to database
mongoose.connect('mongodb+srv://admin:admin@cluster0.nokwl.mongodb.net/MyMovieDB');

const MovieSchema = new mongoose.Schema({//what do we want db to store
  title:String,
  year:String,
  poster:String
});

//Generating model based on schema
const movieModel = new mongoose.model('myMovies', MovieSchema); 

app.get('/api/movies', (req, res) => {//route for GET requests to the root URL ('/')
    const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
];
    res.status(201).json({ myMovies: movies });//returning JSON with status 201 and rename array to 'myMovies'
});

app.post('/api/movies', async (req, res)=>{
  const {title, year, poster } = req.body; //pulling these 3 out of request thats being passed up
    console.log("Movies: " + req.body.title);

    const newMovie = new movieModel({title, year, poster});
    await newMovie.save(); //wont send response back until weve saved work to db (weve actually executed lines above)
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  })

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

