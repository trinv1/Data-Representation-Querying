const express = require('express'); //importing express module
const app = express();//creating an express app instance
const port = 3000;//port where server will listen

app.get('/api/movies', (req, res) => {//route for GET requests to the root URL ('/')
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies: movies });//returning JSON with status 201 and rename array to 'myMovies'
});

app.listen(port, () => {//starting server and listening on specified port
    console.log(`Server is running on http://localhost:${port}`);//logging servers url to console
});

app.get('/hello/:name/:surname', (req, res) => {//defining a route for GET requests to '/hello/:name', where ':name' is a route parameter
    const name = req.params.name;//extracting the parameters from the URL and stores it in a variable
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);//sending a response with "Hello" followed by the provided name
});

const path = require('path');//importing Node's 'path' module to work with file and directory paths

app.get('/index', (req, res) => { //defining a route for GET requests to '/index'
    res.sendFile(path.join(__dirname, 'index.html'));//sending the 'index.html' file as a response
});

app.use(express.static('public'));

app.use((err, req, res, next) => {//error handling
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});