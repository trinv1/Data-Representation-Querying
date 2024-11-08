/*LAB 5 EXPRESS.JS
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

app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

const bodyParser = require('body-parser');//importing the body-parser module
app.use(bodyParser.urlencoded({ extended: true }));//configuring body-parser to parse URL-encoded data

app.post('/name', (req, res) => {
    console.log(req.body); // Log form data to the console
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});


app.use((err, req, res, next) => {//error handling
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//body parser - It takes data sent by the client (e.g., from forms or JSON payloads) and converts it into a JavaScript object.
//This data can then be easily accessed in server code using req.body.
*/
