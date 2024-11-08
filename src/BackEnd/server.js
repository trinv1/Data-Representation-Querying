const express = require('express'); //importing express module
const app = express();//creating an express app instance
const port = 4000;//port where server will listen

app.get('/', (req, res) =>{
   res.send('Hello World');
});


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

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});
