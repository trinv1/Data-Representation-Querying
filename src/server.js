const express = require('express'); //importing express module
const app = express();//creating an express app instance
const port = 3000;//port where server will listen

app.get('/', (req, res) => {//route for GET requests to the root URL ('/')
    res.send('Welcome to Data Representation & Querying'); //sending "Hello World" as a response to the client
});

app.listen(port, () => {//starting server and listening on specified port
    console.log(`Server is running on http://localhost:${port}`);//logging servers url to console
});

app.get('/hello/:name/:surname', (req, res) => {//defining a route for GET requests to '/hello/:name', where ':name' is a route parameter
    const name = req.params.name;//extracting the parameters from the URL and stores it in a variable
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);//sending a response with "Hello" followed by the provided name
});

app.use((err, req, res, next) => {//error handling
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});