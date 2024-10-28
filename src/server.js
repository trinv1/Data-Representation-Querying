const express = require('express'); //importing express module
const app = express();//creating an express app instance
const port = 3000;//port where server will listen

app.get('/', (req, res) => {//route for GET requests to the root URL ('/')
    res.send('Welcome to Data Representation & Querying'); //sending "Hello World" as a response to the client
});

app.listen(port, () => {//starting server and listening on specified port
    console.log(`Server is running on http://localhost:${port}`);//logging servers url to console
});